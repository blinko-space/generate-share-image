import { useState, useEffect, useRef } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';
import Markdown from 'preact-markdown';

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
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markdownRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [containerHeight, setContainerHeight] = useState(630);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const requiredHeight = Math.max(630, contentHeight + 380);
      setContainerHeight(requiredHeight);
    }
  }, [note?.content]);

  // Generate a random filename
  const generateRandomFilename = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `share-image-${result}.png`;
  };

  const handleDownload = async () => {
    if (!containerRef.current || !canvasRef.current || isGenerating) return;

    setIsGenerating(true);
    setErrorMessage(null);
    
    try {
      console.log("开始生成图片...");
      
      // Get the container dimensions
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      console.log("容器尺寸:", rect.width, "x", rect.height);
      
      // Set canvas dimensions
      const canvas = canvasRef.current;
      const scale = 2; // For higher resolution
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;
      
      // Get canvas context
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('无法获取canvas上下文');
      }
      
      // Scale for higher resolution
      ctx.scale(scale, scale);
      
      // Set white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Create a new image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      // Draw directly on the canvas
      ctx.font = '24px Arial';
      ctx.fillStyle = '#2c3e50';
      
      // Draw date
      const dateText = note ? formatDate(note.createdAt) : '2024/12/12';
      ctx.textAlign = 'right';
      ctx.fillText(dateText, rect.width - 60, 60);
      
      // Draw tags
      ctx.textAlign = 'left';
      let tagX = 60;
      let tagY = 100;
      
      if (note?.tags && note.tags.length > 0) {
        note.tags.forEach(tag => {
          // Draw tag background
          ctx.fillStyle = '#f1f5f9';
          const tagWidth = ctx.measureText('#' + tag).width + 20;
          const tagHeight = 30;
          ctx.beginPath();
          ctx.roundRect(tagX, tagY - 20, tagWidth, tagHeight, 15);
          ctx.fill();
          
          // Draw tag text
          ctx.fillStyle = '#64748b';
          ctx.fillText('#' + tag, tagX + 10, tagY);
          
          tagX += tagWidth + 10;
          if (tagX > rect.width - 100) {
            tagX = 60;
            tagY += 40;
          }
        });
      }
      
      // Draw markdown content
      const markdownContent = note?.content || '';
      const lines = markdownContent.split('\n');
      let contentY = tagY + 60;
      
      ctx.font = '16px Arial';
      ctx.fillStyle = '#334155';
      
      lines.forEach(line => {
        // Handle basic markdown (this is simplified)
        if (line.startsWith('# ')) {
          ctx.font = 'bold 28px Arial';
          line = line.substring(2);
        } else if (line.startsWith('## ')) {
          ctx.font = 'bold 24px Arial';
          line = line.substring(3);
        } else if (line.startsWith('### ')) {
          ctx.font = 'bold 20px Arial';
          line = line.substring(4);
        } else if (line.startsWith('- ')) {
          line = '• ' + line.substring(2);
          ctx.font = '16px Arial';
        } else {
          ctx.font = '16px Arial';
        }
        
        // Word wrap for long lines
        const words = line.split(' ');
        let currentLine = '';
        const maxWidth = rect.width - 120;
        
        words.forEach(word => {
          const testLine = currentLine + word + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxWidth && currentLine !== '') {
            ctx.fillText(currentLine, 60, contentY);
            currentLine = word + ' ';
            contentY += 24;
          } else {
            currentLine = testLine;
          }
        });
        
        if (currentLine.trim() !== '') {
          ctx.fillText(currentLine, 60, contentY);
          contentY += 24;
        }
        
        // Add extra space after paragraphs
        if (line.trim() === '') {
          contentY += 12;
        }
      });
      
      // Convert to data URL
      const dataUrl = canvas.toDataURL('image/png');
      
      // Download the image
      const link = document.createElement('a');
      link.download = generateRandomFilename();
      link.href = dataUrl;
      link.click();
      
      setImageUrl(dataUrl);
      console.log("图片生成完成");
    } catch (error) {
      console.error('生成图片失败:', error);
      const errorMsg = error instanceof Error ? error.message : String(error);
      setErrorMessage(errorMsg);
      alert('生成图片失败，请重试: ' + errorMsg);
    } finally {
      setIsGenerating(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  // Custom scrollbar styles
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f5f9;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  `;

  // Custom markdown styles
  const markdownStyles = `
    .markdown-content h1, 
    .markdown-content h2, 
    .markdown-content h3, 
    .markdown-content h4, 
    .markdown-content h5, 
    .markdown-content h6 {
      color: #2c3e50;
      font-weight: bold;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .markdown-content h1 {
      font-size: ${isMobile ? '1.625rem' : '2rem'};
    }
    
    .markdown-content h2 {
      font-size: ${isMobile ? '1.375rem' : '1.75rem'};
    }
    
    .markdown-content h3 {
      font-size: ${isMobile ? '1.25rem' : '1.5rem'};
    }
    
    .markdown-content p {
      margin-bottom: 1rem;
      line-height: 1.8;
    }
    
    .markdown-content ul, 
    .markdown-content ol {
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .markdown-content li {
      margin-bottom: 0.5rem;
    }
    
    .markdown-content code {
      background-color: #f1f5f9;
      padding: 0.125rem 0.375rem;
      border-radius: 0.25rem;
      font-size: ${isMobile ? '0.75rem' : '0.875rem'};
      font-family: monospace;
    }
    
    .markdown-content pre {
      background-color: #f8fafc;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow: auto;
      margin-bottom: 1rem;
      max-width: 100%;
    }
    
    .markdown-content pre code {
      background-color: transparent;
      padding: 0;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    .markdown-content blockquote {
      border-left: 4px solid #e2e8f0;
      padding-left: 1rem;
      margin-left: 0;
      margin-bottom: 1rem;
      color: #64748b;
    }
    
    .markdown-content a {
      color: #3b82f6;
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .markdown-content a:hover {
      color: #2563eb;
      text-decoration: underline;
    }
    
    .markdown-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
    
    .markdown-content hr {
      border: none;
      border-top: 1px solid #e2e8f0;
      margin: 1.5rem 0;
    }
    
    .markdown-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      overflow-x: auto;
      display: block;
    }
    
    .markdown-content th, 
    .markdown-content td {
      border: 1px solid #e2e8f0;
      padding: ${isMobile ? '0.5rem' : '0.75rem'};
      text-align: left;
    }
    
    .markdown-content th {
      background-color: #f8fafc;
      font-weight: bold;
    }
  `;

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4 md:p-5 bg-background overflow-hidden">
      <style>{scrollbarStyles}</style>
      <style>{markdownStyles}</style>
      
      {/* Hidden canvas for image generation */}
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none', position: 'absolute', pointerEvents: 'none' }} 
      />
      
      <div 
        ref={containerRef} 
        className="w-full md:w-[1200px] max-w-full bg-white rounded-xl p-5 md:p-[60px] flex flex-col relative transition-all duration-300"
        style={{ height: isMobile ? 'auto' : `${containerHeight}px` }}
      >
        <div className="absolute top-5 md:top-[60px] right-5 md:right-[60px] text-base md:text-xl text-slate-400 font-medium">
          {note ? formatDate(note.createdAt) : '2024/12/12'}
        </div>
        
        <div className="mb-6 flex flex-wrap">
          {note?.tags.map(tag => (
            <span className="inline-block py-1.5 md:py-2 px-3 md:px-4 bg-slate-100 text-slate-600 rounded-full mr-2 mb-2 text-sm md:text-base font-medium transition-colors duration-200 hover:bg-slate-200">
              #{tag}
            </span>
          ))}
        </div>

        <div 
          ref={contentRef} 
          className={`flex-1 text-base md:text-lg text-slate-500 leading-relaxed mt-5 pr-0 md:pr-5 ${isMobile ? 'max-h-[400px] overflow-y-auto custom-scrollbar' : ''}`}
        >
          <div ref={markdownRef} className="markdown-content">
            {/* @ts-ignore */}
            <Markdown markdown={note?.content || ''} />
          </div>
        </div>
        
        {errorMessage && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            错误: {errorMessage}
          </div>
        )}
      </div>
      
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`fixed bottom-5 bg-primary ${isMobile ? 'left-1/2 -translate-x-1/2' : 'right-5'} ${isGenerating ? '' : 'hover:opacity-90'} text-white py-2.5 md:py-3 px-5 md:px-6 rounded-lg border-none text-sm md:text-base font-medium flex items-center gap-2 transition-all duration-200 z-10 active:scale-[0.98]`}
      >
        {isGenerating ? '生成中...' : '下载分享图片'}
      </button>
    </div>
  );
}
