import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './image';

const meta: Meta<typeof Image> = {
  title: 'Data Display/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    fit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

// 1. แบบปกติ (Default)
export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    alt: 'Retro Computer',
    width: '400px',
  },
};

// 2. ทดสอบ Object Fit: Cover (รูปจะเต็มพื้นที่โดยไม่เบี้ยว)
export const ObjectFitCover: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    alt: 'Cover fit',
    width: '300px',
    height: '300px',
    fit: 'cover',
  },
};

// 3. ทดสอบ Object Fit: Contain (เห็นรูปครบทั้งรูปภายในกรอบ)
export const ObjectFitContain: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    alt: 'Contain fit',
    width: '300px',
    height: '300px',
    fit: 'contain',
    style: { backgroundColor: '#f0f0f0' }, // ใส่พื้นหลังให้เห็นขอบเขต contain
  },
};

// 4. กรณีรูปเสีย (Broken Image)
export const BrokenImage: Story = {
  args: {
    src: 'https://wrong-url.com/image.png',
    alt: 'ขออภัย ไม่สามารถโหลดรูปภาพได้ (Alt text จะแสดงตรงนี้)',
    width: '300px',
    height: '200px',
  },
};