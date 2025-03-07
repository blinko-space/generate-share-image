import { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

export interface TemplateProps {
  id: string;
  name: string;
  backgroundColor: string;
  textColor: string;
  dateColor: string;
  tagBackgroundColor: string;
  tagTextColor: string;
  fontFamily?: string;
  borderRadius?: string;
  accentColor?: string;
}

export const predefinedTemplates: TemplateProps[] = [
  {
    id: 'dark',
    name: '深色模式',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    dateColor: '#a0aec0',
    tagBackgroundColor: '#2d3748',
    tagTextColor: '#e2e8f0',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '15px',
    accentColor: '#3b82f6'
  },
  {
    id: 'light',
    name: '浅色模式',
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
    dateColor: '#4a5568',
    tagBackgroundColor: '#edf2f7',
    tagTextColor: '#2d3748',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '15px',
    accentColor: '#3b82f6'
  },
  {
    id: 'sepia',
    name: '复古风格',
    backgroundColor: '#f8f2e4',
    textColor: '#433422',
    dateColor: '#8c7851',
    tagBackgroundColor: '#e6d7c3',
    tagTextColor: '#5c4935',
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    borderRadius: '10px',
    accentColor: '#c59d5f'
  },
  {
    id: 'ocean',
    name: '海洋风格',
    backgroundColor: '#e0f7fa',
    textColor: '#006064',
    dateColor: '#0097a7',
    tagBackgroundColor: '#b2ebf2',
    tagTextColor: '#00838f',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '20px',
    accentColor: '#00acc1'
  },
  {
    id: 'forest',
    name: '森林风格',
    backgroundColor: '#e8f5e9',
    textColor: '#1b5e20',
    dateColor: '#388e3c',
    tagBackgroundColor: '#c8e6c9',
    tagTextColor: '#2e7d32',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: '12px',
    accentColor: '#43a047'
  }
];

interface TemplateSelectProps {
  selectedTemplate: TemplateProps;
  onSelectTemplate: (template: TemplateProps) => void;
  className?: string;
  children?: ComponentChildren;
}

export default function TemplateSelect({ 
  selectedTemplate, 
  onSelectTemplate, 
  className = '',
  children
}: TemplateSelectProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Check if device is mobile
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  
  return (
    <div className={`${className}`}>
      <h3 className="text-sm font-medium text-gray-700 mb-3">选择模板样式</h3>
      
      {/* Template cards in centered, fixed layout */}
      <div className="flex justify-center mb-6">
        <div className={`flex ${isMobile ? 'flex-wrap justify-center gap-4' : 'gap-5 justify-center'}`}>
          {predefinedTemplates.map((template) => (
            <TemplateCard 
              key={template.id} 
              template={template} 
              isSelected={selectedTemplate.id === template.id}
              onClick={() => onSelectTemplate(template)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      
      {children}
    </div>
  );
}

// Template card component
function TemplateCard({ 
  template, 
  isSelected, 
  onClick,
  isMobile
}: { 
  template: TemplateProps; 
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
}) {
  // Generate fixed widths for color blocks to ensure consistency
  const widths = {
    bg: '100%',
    tag: '90%',
    text: '80%',
    date: '70%',
    accent: '85%'
  };
  
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer transition-all duration-200 ${isSelected ? 'transform scale-105' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      {/* Modern color preview card */}
      <div 
        className="relative mb-2"
        style={{ 
          width: isMobile ? '75px' : '90px',
          height: isMobile ? '75px' : '90px',
          borderRadius: '10px',
          boxShadow: isSelected 
            ? `0 0 0 2px ${template.accentColor || '#3b82f6'}, 0 2px 8px rgba(0, 0, 0, 0.1)` 
            : '0 1px 3px rgba(0, 0, 0, 0.06)',
          backgroundColor: '#1f1f2e',
          padding: isMobile ? '8px 6px' : '12px 10px'
        }}
      >
        {/* Main background panel */}
        <div 
          className="w-full h-[28px] mb-3 rounded-md mx-auto"
          style={{ 
            backgroundColor: template.backgroundColor,
          }}
        />
        
        {/* Color bars with fixed widths */}
        <div className="flex flex-col gap-2">
          {/* Tag color bar */}
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
            <div 
              className="h-2 rounded-sm"
              style={{ 
                backgroundColor: template.tagBackgroundColor,
                width: widths.tag
              }}
            />
          </div>
          
          {/* Text color bar */}
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
            <div 
              className="h-2 rounded-sm"
              style={{ 
                backgroundColor: template.textColor,
                width: widths.text
              }}
            />
          </div>
          
          {/* Date color bar */}
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
            <div 
              className="h-2 rounded-sm"
              style={{ 
                backgroundColor: template.dateColor,
                width: widths.date
              }}
            />
          </div>
          
          {/* Accent color bar */}
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
            <div 
              className="h-2 rounded-sm"
              style={{ 
                backgroundColor: template.accentColor || '#3b82f6',
                width: widths.accent
              }}
            />
          </div>
        </div>
        
        {/* Selected indicator */}
        {isSelected && (
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5" style={{ color: template.accentColor || '#3b82f6' }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      
      {/* Template name */}
      <div 
        className={`text-center text-xs ${isSelected ? 'font-medium' : 'font-normal'}`}
        style={{ color: isSelected ? template.accentColor || '#3b82f6' : '#4b5563' }}
      >
        {template.name}
      </div>
    </div>
  );
}

// 自定义模板创建组件
export function CustomTemplateCreator({
  baseTemplate,
  onSaveTemplate
}: {
  baseTemplate: TemplateProps;
  onSaveTemplate: (template: TemplateProps) => void;
}) {
  const [template, setTemplate] = useState<TemplateProps>({...baseTemplate, name: '自定义模板', id: 'custom-' + Date.now()});
  
  const handleChange = (key: keyof TemplateProps, value: string) => {
    setTemplate(prev => ({...prev, [key]: value}));
  };
  
  return (
    <div className="space-y-4 p-4 border border-gray-200 rounded-lg mt-4">
      <h3 className="text-lg font-medium">创建自定义模板</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">模板名称</label>
          <input
            type="text"
            value={template.name}
            onChange={(e) => handleChange('name', (e.target as HTMLInputElement).value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">背景颜色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.backgroundColor}
              onChange={(e) => handleChange('backgroundColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.backgroundColor}
              onChange={(e) => handleChange('backgroundColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">文本颜色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.textColor}
              onChange={(e) => handleChange('textColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.textColor}
              onChange={(e) => handleChange('textColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">日期颜色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.dateColor}
              onChange={(e) => handleChange('dateColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.dateColor}
              onChange={(e) => handleChange('dateColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">标签背景颜色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.tagBackgroundColor}
              onChange={(e) => handleChange('tagBackgroundColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.tagBackgroundColor}
              onChange={(e) => handleChange('tagBackgroundColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">标签文本颜色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.tagTextColor}
              onChange={(e) => handleChange('tagTextColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.tagTextColor}
              onChange={(e) => handleChange('tagTextColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">强调色</label>
          <div className="flex mt-1">
            <input
              type="color"
              value={template.accentColor || '#3b82f6'}
              onChange={(e) => handleChange('accentColor', (e.target as HTMLInputElement).value)}
              className="h-10 w-10 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              value={template.accentColor || '#3b82f6'}
              onChange={(e) => handleChange('accentColor', (e.target as HTMLInputElement).value)}
              className="ml-2 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">字体</label>
          <select
            value={template.fontFamily}
            onChange={(e) => handleChange('fontFamily', (e.target as HTMLSelectElement).value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">系统默认字体</option>
            <option value="Georgia, Cambria, 'Times New Roman', Times, serif">衬线字体 (Serif)</option>
            <option value="'Courier New', Courier, monospace">等宽字体 (Monospace)</option>
            <option value="'Comic Sans MS', cursive, sans-serif">手写体 (Comic Sans)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">圆角大小</label>
          <input
            type="text"
            value={template.borderRadius || '15px'}
            onChange={(e) => handleChange('borderRadius', (e.target as HTMLInputElement).value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => onSaveTemplate(template)}
        >
          保存模板
        </button>
      </div>
    </div>
  );
}