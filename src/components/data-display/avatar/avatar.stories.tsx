import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    // กำหนดให้แสดงเป็นปุ่มกดเลือกใน Storybook
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // สำหรับแบบ string
      description: 'ขนาดของ Avatar (รองรับทั้ง sm, md, lg หรือตัวเลข px)',
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
      description: 'รูปทรงของ Avatar',
    },
    src: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// 1. เคสมีรูปภาพ (Image)
export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    alt: 'User profile',
    size: 'md',
    shape: 'circle',
  },
};

// 2. เคสมีแต่ชื่อ (จะโชว์ตัวอักษรแรก)
export const WithName: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    shape: 'circle',
  },
};

// 3. เคสไม่มีข้อมูลอะไรเลย (โชว์ Icon Placeholder)
export const Placeholder: Story = {
  args: {
    size: 'md',
    shape: 'circle',
  },
};

// 4. เคสทรงสี่เหลี่ยม (Square)
export const Square: Story = {
  args: {
    name: 'Lookmix Design',
    shape: 'square',
    size: 'lg',
  },
};

// 5. เคสระบุขนาดเป็นตัวเลข (Custom Size)
export const CustomSize: Story = {
  args: {
    name: 'Admin',
    size: 100, // ใส่ตัวเลขได้ตามที่พี่เขียนโค้ดรองรับไว้
    shape: 'circle',
  },
};

// 6. โชว์หลายๆ ขนาดพร้อมกัน
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size={80} />
    </div>
  ),
  args: {
    name: 'Size Test',
  },
};