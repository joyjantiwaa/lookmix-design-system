// theme-options.ts
import { jpjoyTokens } from './tokens/jpjoy-tokens.js';
import { darkThemeSchema } from '../theme/tokens/dark-tokens.js';
import { mergeTokenSchema } from './sparks-compat.js'; // ดึงตัวช่วย Merge มาใช้
import { ThemeMode } from './theme-controller.js';
import { JpjoyThemeSchema } from './tokens/jpjoy-tokens.js';

const base = jpjoyTokens();

export const themeOptions: Record<ThemeMode, JpjoyThemeSchema> = {
  // โหมด light: ใช้ค่าพื้นฐาน
  light: base,

  // โหมด dark: ใช้ Deep Merge เพื่อไม่ให้ค่าอื่นๆ หาย
  dark: mergeTokenSchema(base, darkThemeSchema) as JpjoyThemeSchema,
};