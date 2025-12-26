import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaymentMethod } from './payment-method';

const meta: Meta<typeof PaymentMethod> = {
  title: 'E-commerce/PaymentMethod',
  component: PaymentMethod,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem', background: '#f9f9f9' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PaymentMethod>;

// 1. แบบปกติ (พร้อมใช้งาน)
// ผู้ใช้สามารถลองคลิกเลือกใน Storybook เพื่อดู Toggle Effect ได้เลย
export const Interactive: Story = {};

// 2. ตัวอย่างการแสดงผลบน Desktop
export const DesktopView: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};