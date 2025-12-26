import React, { HTMLAttributes, useMemo, createContext, useContext } from 'react';
import { JpjoyThemeSchema } from './tokens/jpjoy-tokens.js';

const ThemeContext = createContext<JpjoyThemeSchema | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    console.warn('useTheme must be used within a JpjoyTheme provider');
  }
  return context;
};

interface JpjoyThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  tokens: JpjoyThemeSchema;
  children: React.ReactNode;
}

const convertToVars = (obj: any, prefix = '--'): any => {
  const vars: any = {};
  if (!obj) return vars;

  Object.entries(obj).forEach(([key, value]) => {
    const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const currentKey = prefix === '--' ? `${prefix}${kebabKey}` : `${prefix}-${kebabKey}`;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(vars, convertToVars(value, currentKey));
    } else {
      vars[currentKey] = value;
    }
  });
  return vars;
};

export function JpjoyThemeProvider({ tokens, children, className, style, ...rest }: JpjoyThemeProviderProps) {
  const cssVariables = useMemo(() => convertToVars(tokens), [tokens]);

  return (
    <ThemeContext.Provider value={tokens}>
      <div 
        style={{ 
          ...cssVariables, 
          ...style,
          // แก้ไข: เอา display: contents ออกเพื่อให้วาดพื้นหลัง (background-color) ได้จริง
          minHeight: '100vh', 
          display: 'flex',
          flexDirection: 'column'
        }} 
        className={className} 
        {...rest}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}