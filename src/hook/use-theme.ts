import { useContext } from 'react';
import { ThemeContext } from '../theme/theme-controller';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a JpjoyTheme Provider');
  }

  return {
    theme: context.themeMode,           
    isDark: context.themeMode === 'dark',
    isLight: context.themeMode === 'light',
    setTheme: context.setThemeMode,       
    toggleTheme: context.toggleTheme,
  };
}