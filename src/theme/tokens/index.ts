import { jpjoyTokens } from './jpjoy-tokens';
import { darkThemeSchema } from './dark-tokens';

// 1. สร้างฐานข้อมูล Light Theme
export const lightTheme = jpjoyTokens();

// 2. สร้างฟังก์ชันช่วยรวม Object (Deep Merge) แบบง่าย
const merge = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], merge(target[key], source[key]));
    }
  }
  return { ...target, ...source };
};

// 3. สร้าง Dark Theme ที่มีค่าครบถ้วน (โดยเอาค่า Light มาเติมส่วนที่ขาด)
export const darkTheme = merge({ ...lightTheme }, darkThemeSchema);

// Export ทุกอย่างออกไปใช้ใน Provider
export * from './jpjoy-tokens';
export * from './dark-tokens';