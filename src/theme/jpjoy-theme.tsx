import React, { ReactNode, useCallback, useState, useMemo } from 'react';
import classNames from 'classnames';
import { mergeTokenSchema } from './sparks-compat.js';
import { JpjoyThemeProvider } from './jpjoy-theme-provider.js';
import { JpjoyThemeSchema } from './tokens/jpjoy-tokens.js';
import { ThemeContext, ThemeContextValue, ThemeMode } from './theme-controller.js';
import { themeOptions } from './theme-options.js';
import styles from './jpjoy-theme.module.scss';

export type JpjoyThemeProps = {
  children?: ReactNode;
  className?: string;
  overrides?: Partial<JpjoyThemeSchema>;
  initialTheme?: ThemeMode;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLDivElement>;

export function JpjoyTheme({ 
  children, 
  initialTheme = 'light', 
  overrides, 
  className, 
  style, 
  ...rest 
}: JpjoyThemeProps) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialTheme);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
    setThemeMode,
  };

  const themeOverrides = useMemo(() => {
    // ดึงค่าที่ถูก Merge base + dark มาแล้วจาก themeOptions ตามโหมดปัจจุบัน
    const selectedTheme = themeOptions[themeMode];

    // ผสมกับ overrides จาก Props (ถ้ามี) เป็นลำดับสุดท้าย
    return mergeTokenSchema(selectedTheme, overrides) as JpjoyThemeSchema;
  }, [themeMode, overrides]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <JpjoyThemeProvider
        // styles.jpjoyTheme จะเป็นตัวกำหนด background-color: var(--colors-surface-background)
        className={classNames(styles.jpjoyTheme, className)}
        tokens={themeOverrides}
        style={style}
        {...rest}
      >
        {children}
      </JpjoyThemeProvider>
    </ThemeContext.Provider>
  );
}