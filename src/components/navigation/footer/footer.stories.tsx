import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen', // ให้แสดงผลเต็มหน้าจอ Storybook เพื่อดูความกว้างจริง
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// 1. แบบปกติ
export const Default: Story = {};

// 2. แบบกำหนดพื้นหลัง (เผื่อใช้ในหน้าที่มีสีพื้นต่างออกไป)
export const CustomBackground: Story = {
  args: {
    style: { backgroundColor: 'var(--colors-surface-secondary)' },
  },
};

// 3. ทดสอบบน Mobile (ใช้ viewport ของ Storybook ช่วยได้)
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};