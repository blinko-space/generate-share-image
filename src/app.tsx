import { useState, useEffect, useRef } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";
import TemplateSelect, {
  predefinedTemplates,
  TemplateProps,
} from "./components/ImageTemplate";
import { ImageContent } from "./components/ImageContent";
import {
  generateImageFromHtml,
  generateRandomFilename,
  downloadImage,
  copyImageToClipboard,
} from "./components/HtmlToImageGenerator";

interface ShareImageProps {
  note?: {
    title: string;
    content: string;
    createdAt: string;
    tags: string[];
  };
}

export function App({ note }: ShareImageProps): JSXInternal.Element {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateProps>(
    predefinedTemplates[0]
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [containerWidth, setContainerWidth] = useState("50%");
  const [showMarkdown, setShowMarkdown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile and set container width accordingly
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setContainerWidth(isMobileView ? "95%" : "50%");
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Generate image on initial load
  useEffect(() => {
    handleGenerateImage();
  }, []);

  // Generate image when template changes
  useEffect(() => {
    if (selectedTemplate) {
      handleGenerateImage();
    }
  }, [selectedTemplate]);

  const handleGenerateImage = async () => {
    if (!containerRef.current || isGenerating) return;

    console.log("Starting image generation");
    setIsGenerating(true);
    setErrorMessage(null);

    try {
      // 确保容器有正确的尺寸
      const container = containerRef.current;

      // 记录原始样式
      const originalPosition = container.style.position;
      const originalWidth = container.style.width;

      // 临时设置固定宽度以确保正确渲染
      container.style.position = "relative";
      container.style.width = isMobile ? "95vw" : "95vw"; // 固定宽度

      // 等待DOM更新
      await new Promise((resolve) => setTimeout(resolve, 100));

      // 生成图片
      const dataUrl = await generateImageFromHtml(container, {
        setErrorMessage: (msg) => {
          console.log("Error message:", msg);
          if (msg) setErrorMessage(msg);
        },
        backgroundColor: selectedTemplate.backgroundColor,
      });

      container.style.position = 'absolute';
      container.style.width = originalWidth;

      if (dataUrl) {
        console.log("Image generated successfully");
        setImageUrl(dataUrl);
      } else {
        throw new Error("Failed to generate image");
      }
    } catch (err) {
      console.error("Error generating image:", err);
      setErrorMessage(
        `生成图片时发生错误: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyImage = async () => {
    if (!imageUrl) return;

    console.log("Copying image to clipboard");
    try {
      const success = await copyImageToClipboard(imageUrl);

      if (success) {
        console.log("Image copied successfully");
        setShowCopyMessage(true);
        setTimeout(() => setShowCopyMessage(false), 2000);
      } else {
        throw new Error("Failed to copy image");
      }
    } catch (error) {
      console.error("复制图片失败:", error);
      alert("复制图片失败，请重试");
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    console.log("Downloading image");
    downloadImage(imageUrl);
  };

  const toggleMarkdown = () => {
    setShowMarkdown(!showMarkdown);
    // Generate a new image after toggling markdown visibility
    if (!showMarkdown) {
      setTimeout(() => handleGenerateImage(), 100);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center p-2 md:p-5 bg-background ">
      {/* Template selector */}
      <div className="w-full max-w-full mb-3 md:mb-4">
        <TemplateSelect
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
        />
      </div>

      {/* Generate image button and toggle markdown button */}
      <div className="w-full flex justify-center mb-4 gap-2">
        <button
          onClick={handleGenerateImage}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
          disabled={isGenerating}
        >
          {isGenerating ? "生成中..." : "生成图片"}
        </button>

        <button
          onClick={toggleMarkdown}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
        >
          {showMarkdown ? "隐藏Markdown" : "显示Markdown"}
        </button>
      </div>

      {/* Image preview */}
      {imageUrl && (
        <div className="w-full flex flex-col items-center mb-3 md:mb-4">
          <div className="relative" style={{ width: containerWidth }}>
            <img
              src={imageUrl}
              alt="Share Image"
              className="w-full h-auto rounded-xl shadow-md"
            />

            {/* Copy success message */}
            {showCopyMessage && (
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-500 text-white px-2 md:px-3 py-1 md:py-2 rounded-md shadow-md text-xs md:text-sm animate-fade-in-out">
                已复制到剪贴板
              </div>
            )}
          </div>

          {/* Image actions */}
          <div className="flex gap-2 md:gap-3 mt-3 md:mt-4">
            <button
              onClick={handleCopyImage}
              className="bg-primary hover:opacity-90 text-white py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-none text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 transition-all duration-200 active:scale-[0.98]"
            >
              复制图片
            </button>
            <button
              onClick={handleDownload}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-1.5 md:py-2 px-3 md:px-4 rounded-lg border-none text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 transition-all duration-200 active:scale-[0.98]"
            >
              下载图片
            </button>
          </div>
        </div>
      )}

      {/* Content container */}
      <div
        ref={containerRef}
        className="rounded-xl p-4 md:p-[60px] flex flex-col relative transition-all duration-300"
        style={{
          backgroundColor: selectedTemplate.backgroundColor,
          color: selectedTemplate.textColor,
          fontFamily: selectedTemplate.fontFamily || "system-ui, sans-serif",
          borderRadius: selectedTemplate.borderRadius || "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          width: containerWidth,
          minHeight: "200px",
          position: "absolute",
          zIndex: -9999,
          scale: 0.1,
        }}
      >
        <ImageContent
          content={note?.content || ""}
          createdAt={note?.createdAt || new Date().toISOString()}
          tags={note?.tags || []}
          template={selectedTemplate}
        />
      </div>

      {/* Error message */}
      {errorMessage && (
        <div className="mt-3 md:mt-4 p-2 md:p-3 bg-red-100 text-red-700 rounded-md text-xs md:text-sm">
          {errorMessage}
        </div>
      )}

      {/* Loading overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-6 h-6 md:w-8 md:h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2 md:mb-3"></div>
            <p className="text-gray-800 text-sm md:text-base">
              正在生成图片...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
