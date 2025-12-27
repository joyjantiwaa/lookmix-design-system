// .storybook/vitest.setup.ts
import { beforeAll } from 'vitest';
import '@testing-library/jest-dom';

// ถ้าพี่ต้องการใช้ assert ใน browser
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.assert = (expr: any, msg?: string) => {
    if (!expr) throw new Error(msg || 'Assertion failed');
  };
}