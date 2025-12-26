import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './card';
import { Button } from '../../forms/button';
import { Badge } from '../badge/badge';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'compact'],
    },
    interactive: { control: 'boolean' },
    onClick: { action: 'clicked' }, // บันทึกการคลิกใน Storybook actions
  },
  // ปรับให้ Card ไม่กว้างเต็มจอเกินไปในหน้าพรีวิว
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// 1. แบบพื้นฐาน (Default)
export const Default: Story = {
  args: {
    title: 'Minimal Design',
    children: 'นี่คือตัวอย่างการใช้งาน Card พื้นฐานที่มาพร้อมกับ Shadow และ Border Radius ที่พี่ตั้งค่าไว้ใน tokens',
    variant: 'default',
  },
};

// 2. Card พร้อมรูปภาพ (Product Style)
export const WithImage: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999',
    imageAlt: 'Product Image',
    title: 'Premium Watch',
    children: 'สัมผัสประสบการณ์ใหม่กับนาฬิกาดีไซน์หรูหราที่ตอบโจทย์ทุกไลฟ์สไตล์ของคุณ',
    footer: <Button fullWidth>Add to Cart</Button>,
    interactive: true,
  },
};

// 3. Glass Variant (แบบกระจก)
export const GlassEffect: Story = {
  parameters: {
    // ใส่พื้นหลังสีๆ เพื่อให้เห็นเอฟเฟกต์ Glass Blur ชัดขึ้น
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  args: {
    variant: 'glass',
    title: 'Glassmorphism',
    children: 'ตัวแปรแบบ glass จะใช้ backdrop-filter blur เพื่อสร้างเอฟเฟกต์กระจกฝ้าที่ทันสมัย',
    footer: <Badge variant="success" content="Active Now" />,
  },
};

// 4. Compact Card (ขนาดเล็ก)
export const Compact: Story = {
  args: {
    variant: 'compact',
    header: <Badge content="Featured" />,
    title: 'Compact Card',
    children: 'เหมาะสำหรับใช้ใน Grid หรือรายการที่ต้องการประหยัดพื้นที่',
    footer: <small>Updated 2 mins ago</small>,
  },
};

// 5. Full Featured (ครบทุกส่วน)
export const FullFeatured: Story = {
  args: {
    interactive: true,
    header: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span>Category</span>
        <Badge isDot variant="success" />
      </div>
    ),
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
    title: 'Learning Storybook',
    children: 'การทำ UI Library จะง่ายขึ้นมากเมื่อเรามีระบบ Card ที่ดีแบบนี้ครับพี่',
    footer: (
      <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
        <Button appearance="secondary" size="sm">Share</Button>
        <Button appearance="primary" size="sm">Read More</Button>
      </div>
    ),
  },
};
