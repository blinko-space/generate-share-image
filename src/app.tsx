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
    attachments?: Array<{
      path: string;
      type: string;
    }>;
  };
}

export function App({ note }: ShareImageProps): JSXInternal.Element {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateProps>(
    predefinedTemplates[0]
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    generateImage(false);
  }, []);

  // Generate image when template changes
  useEffect(() => {
    if (selectedTemplate) {
      generateImage(false);
    }
  }, [selectedTemplate]);

  const generateImage = async (downloadDirectly: boolean = false) => {
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
      container.style.width = isMobile ? "90vw" : "50vw"; // 固定宽度

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

      container.style.position = originalPosition;
      container.style.width = originalWidth;

      if (dataUrl) {
        console.log("Image generated successfully");
        
        // 如果选择直接下载，则触发下载
        if (downloadDirectly) {
          downloadImage(dataUrl);
        }
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

  const handleGenerateImage = () => {
    generateImage(true); // 直接下载
  };

  const handleMarkdownDownload = () => {
    setShowMarkdown(!showMarkdown);
    // 生成图片并直接下载
    if (!showMarkdown) {
      setTimeout(() => generateImage(true), 100);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center p-2 md:p-5 ">
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
          className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
          disabled={isGenerating}
        >
          {isGenerating ? "生成中..." : "下载图片"}
        </button>
      </div>

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
          minHeight: "200px"
        }}
      >
        <ImageContent
          content={note?.content || ""}
          createdAt={note?.createdAt || new Date().toISOString()}
          tags={note?.tags || []}
          template={selectedTemplate}
          attachments={note?.attachments || []}
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
