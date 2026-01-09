import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs', // จัดกลุ่มภายใต้ Navigation
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    // เปิดใช้งาน Router ตามที่ตั้งค่าไว้ใน preview.tsx
    router: true, 
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

// 1. ตัวอย่างแบบพื้นฐาน (3 ระดับ)
export const Default: Story = {
  args: {
    items: [
      { label: 'หน้าแรก', href: '/' },
      { label: 'สินค้าทั้งหมด', href: '/products' },
      { label: 'เสื้อผ้าผู้ชาย' }, // ตัวสุดท้ายไม่ต้องใส่ href เพราะเป็นหน้าปัจจุบัน
    ],
  },
};

// 2. ตัวอย่างแบบหลายระดับ (Long Path)
export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/cat' },
      { label: 'Sub Category', href: '/sub' },
      { label: 'Product List', href: '/list' },
      { label: 'Current Item' },
    ],
  },
};

// 3. ตัวอย่างแบบ 2 ระดับ (Simple)
export const Simple: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings' },
    ],
  },
};