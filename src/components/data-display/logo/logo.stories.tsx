import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './logo';

const meta: Meta<typeof Logo> = {
  title: 'Foundation/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 100, step: 1 },
      description: 'ขนาดของไอคอนโลโก้ (px)',
    },
    minimal: { control: 'boolean' },
    name: { control: 'text' },
    slogan: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// 1. โลโก้มาตรฐาน (Brand Header)
export const Default: Story = {
  args: {
    name: 'LOOKMIX',
    slogan: 'Fashion & Lifestyle',
    size: 39,
  },
};

// 2. แบบไอคอนอย่างเดียว (Minimal) - สำหรับ Sidebar หรือ Mobile
export const Minimal: Story = {
  args: {
    minimal: true,
    size: 40,
  },
};

// 3. แบบคลิกได้ (Navigation)
export const Clickable: Story = {
  args: {
    name: 'LOOKMIX',
    href: '/',
    slogan: 'Click to home',
  },
};

// 4. ขนาดใหญ่พิเศษ (Large Splash)
export const Large: Story = {
  args: {
    name: 'LOOKMIX',
    slogan: 'THE NEXT GENERATION OF FASHION',
    size: 80,
  },
};

// 5. ปรับเปลี่ยนชื่อแบรนด์ (Custom Brand)
export const CustomBrand: Story = {
  args: {
    name: 'MY STORE',
    slogan: 'Quality over quantity',
    size: 32,
  },
};