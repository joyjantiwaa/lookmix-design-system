import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  themeMode: ThemeMode; // ✅ เปลี่ยนจาก theme เป็น themeMode ให้ตรงกับ jpjoy-theme.tsx
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void; // ✅ เปลี่ยนชื่อให้สื่อความหมายชัดเจน
}

// สร้าง Context
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/* =========================
   ThemeProvider
========================= */
export function ThemeProvider({
  children,
  initialTheme = 'light',
}: {
  children: ReactNode;
  initialTheme?: ThemeMode;
}) {
  // ลองดึงค่าจาก LocalStorage ก่อน ถ้าไม่มีค่อยใช้ initialTheme
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jpjoy-theme-mode') as ThemeMode;
      return saved || initialTheme;
    }
    return initialTheme;
  });

  // ฟังก์ชันอัปเดต Attribute ที่ <html> และเซฟลง LocalStorage
  const updateTheme = (mode: ThemeMode) => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('jpjoy-theme-mode', mode);
  };

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    updateTheme(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      updateTheme(next);
      return next;
    });
  }, []);

  // Sync ค่าตอนเริ่มต้น
  useEffect(() => {
    updateTheme(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* =========================
   Public hook
========================= */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}