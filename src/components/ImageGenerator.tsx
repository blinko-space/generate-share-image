import { TemplateProps } from './ImageTemplate';
import { formatDate } from './ImageContent';

export function generateRandomFilename() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `share-image-${result}.png`;
}

export async function generateImage(
  containerRef: HTMLDivElement | null,
  canvasRef: HTMLCanvasElement | null,
  template: TemplateProps,
  content: string,
  date: string,
  tags: string[],
  setErrorMessage: (message: string | null) => void,
  isMobile: boolean = false
): Promise<string | null> {
  if (!containerRef || !canvasRef) return null;
  
  try {
    console.log("开始生成图片...");
    
    // Get the container dimensions
    const rect = containerRef.getBoundingClientRect();
    console.log("容器尺寸:", rect.width, "x", rect.height);
    
    // Set canvas dimensions
    const canvas = canvasRef;
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
    
    // Set background
    ctx.fillStyle = template.backgroundColor;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Draw date
    const dateText = formatDate(date);
    const fontSize = isMobile ? 16 : 20;
    ctx.font = `${fontSize}px ${template.fontFamily || 'Arial'}`;
    ctx.fillStyle = template.dateColor;
    ctx.textAlign = 'right';
    ctx.fillText(dateText, rect.width - 40, 40);
    
    // Draw tags
    ctx.textAlign = 'left';
    let tagX = 40;
    let tagY = 80;
    
    if (tags && tags.length > 0) {
      const tagFontSize = isMobile ? 12 : 14;
      ctx.font = `${tagFontSize}px ${template.fontFamily || 'Arial'}`;
      
      tags.forEach(tag => {
        // Draw tag background
        ctx.fillStyle = template.tagBackgroundColor;
        const tagWidth = ctx.measureText('#' + tag).width + 16;
        const tagHeight = isMobile ? 24 : 28;
        ctx.beginPath();
        // Use rounded rectangle with template's border radius
        const radius = parseInt(template.borderRadius || '15px') / 2;
        ctx.roundRect(tagX, tagY - (tagHeight * 0.7), tagWidth, tagHeight, radius);
        ctx.fill();
        
        // Draw tag text
        ctx.fillStyle = template.tagTextColor;
        ctx.fillText('#' + tag, tagX + 8, tagY);
        
        tagX += tagWidth + 8;
        if (tagX > rect.width - 80) {
          tagX = 40;
          tagY += tagHeight + 8;
        }
      });
    }
    
    // Draw markdown content
    const lines = content.split('\n');
    let contentY = tagY + 40;
    
    const contentFontSize = isMobile ? 14 : 16;
    const headingFontSize = isMobile ? 20 : 24;
    const subheadingFontSize = isMobile ? 18 : 20;
    const lineHeight = isMobile ? 20 : 24;
    
    ctx.font = `${contentFontSize}px ${template.fontFamily || 'Arial'}`;
    ctx.fillStyle = template.textColor;
    
    lines.forEach(line => {
      // Handle basic markdown (this is simplified)
      if (line.startsWith('# ')) {
        ctx.font = `bold ${headingFontSize}px ${template.fontFamily || 'Arial'}`;
        line = line.substring(2);
      } else if (line.startsWith('## ')) {
        ctx.font = `bold ${subheadingFontSize}px ${template.fontFamily || 'Arial'}`;
        line = line.substring(3);
      } else if (line.startsWith('### ')) {
        ctx.font = `bold ${contentFontSize + 2}px ${template.fontFamily || 'Arial'}`;
        line = line.substring(4);
      } else if (line.startsWith('- ')) {
        line = '• ' + line.substring(2);
        ctx.font = `${contentFontSize}px ${template.fontFamily || 'Arial'}`;
      } else {
        ctx.font = `${contentFontSize}px ${template.fontFamily || 'Arial'}`;
      }
      
      // Word wrap for long lines
      const words = line.split(' ');
      let currentLine = '';
      const maxWidth = rect.width - 80; // Adjust margins for narrower width
      
      words.forEach(word => {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine !== '') {
          ctx.fillText(currentLine, 40, contentY);
          currentLine = word + ' ';
          contentY += lineHeight;
        } else {
          currentLine = testLine;
        }
      });
      
      if (currentLine.trim() !== '') {
        ctx.fillText(currentLine, 40, contentY);
        contentY += lineHeight;
      }
      
      // Add extra space after paragraphs
      if (line.trim() === '') {
        contentY += lineHeight / 2;
      }
    });
    
    // Convert to data URL
    return canvas.toDataURL('image/png');
    
  } catch (error) {
    console.error('生成图片失败:', error);
    const errorMsg = error instanceof Error ? error.message : String(error);
    setErrorMessage(errorMsg);
    return null;
  }
}
