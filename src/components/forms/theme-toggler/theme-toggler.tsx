import classNames from 'classnames';
import { useTheme } from '../../../theme/theme-controller';
import { SunIcon } from './sun-icon';
import { MoonIcon } from './moon-icon';
import styles from './theme-toggler.module.scss';

// ✅ เพิ่ม Interface ตรงนี้เพื่อให้ TypeScript เลิกฟ้องแดง
export interface ThemeTogglerProps {
  className?: string;
}

export function ThemeToggler({ className }: ThemeTogglerProps) {
  // ✅ ใช้ themeMode ให้ตรงกับใน theme-controller.tsx
  const { themeMode, toggleTheme } = useTheme(); 
  
  // ✅ เช็คสถานะ dark mode จาก themeMode
  const isDark = themeMode === 'dark';

  return (
    <button
      className={classNames(styles.toggler, className)}
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className={styles.iconWrapper}>
        <SunIcon 
          className={classNames(styles.icon, styles.sun, !isDark && styles.active)} 
          aria-hidden="true"
        />
        <MoonIcon 
          className={classNames(styles.icon, styles.moon, isDark && styles.active)} 
          aria-hidden="true"
        />
      </div>
    </button>
  );
}