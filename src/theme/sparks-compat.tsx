import React, { createContext, useContext, ReactNode, useMemo } from 'react';

// 1. ปรับปรุงฟังก์ชัน Merge ให้รองรับการทำงานกับ Object ทั่วไป
export function mergeTokenSchema(base: any, overrides: any): any {
  if (!overrides) return base;
  const merged = { ...base };
  for (const key in overrides) {
    if (overrides[key] instanceof Object && key in base && !Array.isArray(overrides[key])) {
      merged[key] = mergeTokenSchema(base[key], overrides[key]);
    } else {
      merged[key] = overrides[key];
    }
  }
  return merged;
}

// 2. กำหนด Interface ให้ชัดเจน (แก้ children เหลือง)
export interface ThemeProviderProps {
  children?: ReactNode;
  overrides?: any;
  className?: string;
  style?: React.CSSProperties;
}

export function createTheme<T>(options: { tokens: () => T }) {
  // สร้าง Context (แก้ ThemeContext แดง/เหลือง โดยการขยับมาไว้ที่ Root ของฟังก์ชัน)
  const ThemeContext = createContext<T>(options.tokens());

  const ThemeProvider = ({ children, overrides, className, style }: ThemeProviderProps) => {
    const baseTokens = options.tokens();
    
    const finalTokens = useMemo(() => 
      mergeTokenSchema(baseTokens, overrides), 
      [baseTokens, overrides]
    ) as T;

    // 3. กำหนด Type ให้ Record (แก้ cssVars แดง/เหลือง)
    const cssVars = useMemo(() => {
      const vars: Record<string, string> = {};
      const convert = (obj: any, prefix = '--') => {
        if (!obj) return;
        Object.entries(obj).forEach(([key, value]) => {
          const kebab = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
          const currentKey = prefix === '--' ? `${prefix}${kebab}` : `${prefix}-${kebab}`;
          
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            convert(value, currentKey);
          } else {
            vars[currentKey] = String(value);
          }
        });
      };
      convert(finalTokens);
      return vars;
    }, [finalTokens]);

    return (
      <ThemeContext.Provider value={finalTokens}>
        <div 
          className={className} 
          style={{ ...(cssVars as React.CSSProperties), ...style }}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    );
  };

  return {
    ThemeProvider,
    useTheme: () => useContext(ThemeContext),
  };
}