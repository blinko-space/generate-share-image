import { useState, useEffect, useRef } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';
import TemplateSelect, { predefinedTemplates, TemplateProps } from './components/ImageTemplate';
import { ImageContent } from './components/ImageContent';
import { generateImage, generateRandomFilename } from './components/ImageGenerator';

interface ShareImageProps {
  note?: {
    title: string;
    content: string;
    createdAt: string;
    tags: string[];
  };
}

export function App({ note }: ShareImageProps): JSXInternal.Element {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateProps>(predefinedTemplates[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState(630);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markdownRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Adjust container height based on content
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const requiredHeight = Math.max(630, contentHeight + 380);
      setContainerHeight(requiredHeight);
    }
  }, [note?.content, selectedTemplate]);

  // Initial render with delay to ensure elements are fully loaded
  useEffect(() => {
    if (initialRender && note && containerRef.current) {
      // Add a small delay for initial render to ensure DOM is fully ready
      const timer = setTimeout(() => {
        handleGenerateImage();
        setInitialRender(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [initialRender, note]);

  // Generate image when template changes
  useEffect(() => {
    if (!initialRender && note && containerRef.current) {
      handleGenerateImage();
    }
  }, [selectedTemplate]);

  const handleGenerateImage = async () => {
    if (!containerRef.current || !canvasRef.current || isGenerating) return;

    setIsGenerating(true);
    setErrorMessage(null);
    
    try {
      const dataUrl = await generateImage(
        containerRef.current,
        canvasRef.current,
        selectedTemplate,
        note?.content || '',
        note?.createdAt || new Date().toISOString(),
        note?.tags || [],
        setErrorMessage,
        isMobile
      );
      
      if (dataUrl) {
        setImageUrl(dataUrl);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('生成图片时发生错误');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyImage = async () => {
    if (!imageUrl) return;
    
    try {
      // Create a temporary image element
      const img = new Image();
      img.src = imageUrl;
      
      // Wait for the image to load
      await new Promise((resolve) => {
        img.onload = resolve;
      });
      
      // Create a canvas to draw the image
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the image on the canvas
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        
        // Convert canvas to blob
        const blob = await new Promise<Blob | null>((resolve) => 
          canvas.toBlob(resolve, 'image/png')
        );
        
        if (blob) {
          // Create a ClipboardItem and write to clipboard
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          
          // Show success message
          setShowCopyMessage(true);
          setTimeout(() => setShowCopyMessage(false), 2000);
        }
      }
    } catch (error) {
      console.error('复制图片失败:', error);
      alert('复制图片失败，请重试');
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    
    // Create a download link
    const link = document.createElement('a');
    link.download = generateRandomFilename();
    link.href = imageUrl;
    link.click();
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center p-4 md:p-5 bg-background overflow-hidden">
      {/* Hidden canvas for image generation */}
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none', position: 'absolute', pointerEvents: 'none' }} 
      />
      
      {/* Template selector */}
      <div className="w-full md:w-[1200px] max-w-full mb-4">
        <TemplateSelect 
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
        />
      </div>
      
      {/* Image preview */}
      {imageUrl && (
        <div className="w-full md:w-[1200px] max-w-full mb-4 flex flex-col items-center">
          <div className="relative">
            <img 
              ref={imageRef}
              src={imageUrl} 
              alt="Share Image" 
              className="max-w-full h-auto rounded-xl shadow-md" 
            />
            
            {/* Copy success message */}
            {showCopyMessage && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-md shadow-md animate-fade-in-out">
                已复制到剪贴板
              </div>
            )}
          </div>
          
          {/* Image actions */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleCopyImage}
              className="bg-primary hover:opacity-90 text-white py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
            >
              复制图片
            </button>
            <button
              onClick={handleDownload}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-4 rounded-lg border-none text-sm font-medium flex items-center gap-2 transition-all duration-200 active:scale-[0.98]"
            >
              下载图片
            </button>
          </div>
        </div>
      )}
      
      {/* Content container */}
      <div
        ref={containerRef}
        className="w-full md:w-[1200px] max-w-full rounded-xl p-5 md:p-[60px] flex flex-col relative transition-all duration-300"
        style={{ 
          backgroundColor: selectedTemplate.backgroundColor,
          color: selectedTemplate.textColor,
          fontFamily: selectedTemplate.fontFamily || 'system-ui, sans-serif',
          borderRadius: selectedTemplate.borderRadius || '15px',
          minHeight: containerHeight + 'px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div ref={contentRef}>
          <ImageContent 
            content={note?.content || ''} 
            createdAt={note?.createdAt || new Date().toISOString()}
            tags={note?.tags || []}
            template={selectedTemplate}
          />
        </div>
      </div>
      
      {/* Error message */}
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      {isGenerating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-700">生成图片中...</p>
          </div>
        </div>
      )}
    </div>
  );
}
