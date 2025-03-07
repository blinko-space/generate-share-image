import { useRef, useEffect } from 'preact/hooks';
import Markdown from 'preact-markdown';
import type { JSXInternal } from 'preact/src/jsx';
import { TemplateProps } from './ImageTemplate';

interface ImageContentProps {
  content: string;
  createdAt: string;
  tags: string[];
  template: TemplateProps;
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function ImageContent({ 
  content, 
  createdAt, 
  tags, 
  template
}: ImageContentProps): JSXInternal.Element {
  const isMobile = window.innerWidth <= 768;
  
  // Custom scrollbar styles
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: ${template.tagBackgroundColor};
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: ${template.tagTextColor};
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: ${template.dateColor};
    }
  `;

  // Custom markdown styles
  const markdownStyles = `
    .markdown-content {
      font-size: ${isMobile ? '0.95rem' : '1rem'};
      line-height: 1.7;
    }
    
    .markdown-content h1, 
    .markdown-content h2, 
    .markdown-content h3, 
    .markdown-content h4, 
    .markdown-content h5, 
    .markdown-content h6 {
      color: ${template.textColor};
      font-weight: bold;
      margin-top: 1.2rem;
      margin-bottom: 0.8rem;
      line-height: 1.3;
    }
    
    .markdown-content h1 {
      font-size: ${isMobile ? '1.4rem' : '1.7rem'};
    }
    
    .markdown-content h2 {
      font-size: ${isMobile ? '1.25rem' : '1.5rem'};
    }
    
    .markdown-content h3 {
      font-size: ${isMobile ? '1.1rem' : '1.3rem'};
    }
    
    .markdown-content p {
      margin-bottom: 0.8rem;
      line-height: 1.7;
    }
    
    .markdown-content ul, 
    .markdown-content ol {
      padding-left: 1.2rem;
      margin-bottom: 0.8rem;
    }
    
    .markdown-content li {
      margin-bottom: 0.4rem;
    }
    
    .markdown-content code {
      background-color: ${template.tagBackgroundColor};
      padding: 0.125rem 0.25rem;
      border-radius: 0.25rem;
      font-size: ${isMobile ? '0.75rem' : '0.85rem'};
      font-family: monospace;
    }
    
    .markdown-content pre {
      background-color: ${template.tagBackgroundColor};
      padding: 0.8rem;
      border-radius: 0.4rem;
      overflow: auto;
      margin-bottom: 0.8rem;
      max-width: 100%;
    }
    
    .markdown-content pre code {
      background-color: transparent;
      padding: 0;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    .markdown-content blockquote {
      border-left: 3px solid ${template.tagBackgroundColor};
      padding-left: 0.8rem;
      margin-left: 0;
      margin-bottom: 0.8rem;
      color: ${template.dateColor};
    }
    
    .markdown-content a {
      color: ${template.accentColor || '#3b82f6'};
      text-decoration: none;
      transition: color 0.2s ease;
    }
    
    .markdown-content a:hover {
      color: ${template.accentColor ? template.accentColor : '#2563eb'};
      text-decoration: underline;
    }
    
    .markdown-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.4rem;
      margin-bottom: 0.8rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    }
    
    .markdown-content hr {
      border: none;
      border-top: 1px solid ${template.tagBackgroundColor};
      margin: 1.2rem 0;
    }
    
    .markdown-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 0.8rem;
      overflow-x: auto;
      display: block;
    }
    
    .markdown-content th, 
    .markdown-content td {
      border: 1px solid ${template.tagBackgroundColor};
      padding: ${isMobile ? '0.4rem' : '0.6rem'};
      text-align: left;
    }
    
    .markdown-content th {
      background-color: ${template.tagBackgroundColor};
      font-weight: bold;
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>
      <style>{markdownStyles}</style>
      
      <div className="absolute top-4 md:top-[40px] right-4 md:right-[40px] text-sm md:text-base font-medium"
        style={{ color: template.dateColor }}>
        {formatDate(createdAt)}
      </div>
      
      <div className="mb-4 md:mb-5 flex flex-wrap mt-6 md:mt-4">
        {tags.map(tag => (
          <span 
            key={tag}
            className="inline-block py-1 md:py-1.5 px-2 md:px-3 rounded-full mr-2 mb-2 text-xs md:text-sm font-medium transition-colors duration-200"
            style={{ 
              backgroundColor: template.tagBackgroundColor,
              color: template.tagTextColor
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div
        className="mt-4 custom-scrollbar max-h-full"
      >
        <div
          className="markdown-content"
        >
          <Markdown markdown={content} />
        </div>
      </div>
    </>
  );
}
