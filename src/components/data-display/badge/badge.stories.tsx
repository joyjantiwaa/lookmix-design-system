import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { Avatar } from '../avatar/avatar'; // สมมติเอามาใช้โชว์เคส Overlap

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    content: { control: 'text' },
    isDot: { control: 'boolean' },
    max: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 1. แบบปกติ (Standalone)
export const Default: Story = {
  args: {
    content: 'New',
    variant: 'primary',
  },
};

// 2. แบบตัวเลขและการจัดการค่า Max (เช่น แจ้งเตือน 100+ )
export const NotificationCount: Story = {
  args: {
    content: 120,
    max: 99,
    variant: 'danger',
  },
};

// 3. แสดงครบทุกสี (All Variants)
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge content="Primary" variant="primary" />
      <Badge content="Secondary" variant="secondary" />
      <Badge content="Success" variant="success" />
      <Badge content="Danger" variant="danger" />
      <Badge content="Warning" variant="warning" />
    </div>
  ),
};

// 4. แบบจุด (Status Dot)
export const StatusDot: Story = {
  args: {
    isDot: true,
    variant: 'success',
  },
};

// 5. เคส Overlap (ใช้แปะบน Component อื่น - อันนี้สำคัญมาก!)
export const OverlapOnAvatar: Story = {
  render: (args) => (
    <Badge {...args}>
      {/* ใช้ Avatar ที่เราเพิ่งทำไปมาโชว์คู่กัน */}
      <Avatar 
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
        size="lg" 
      />
    </Badge>
  ),
  args: {
    content: 5,
    variant: 'danger',
    size: 'md',
  },
};

// 6. Overlap แบบจุดออนไลน์ (Online Status)
export const OnlineStatus: Story = {
  render: (args) => (
    <Badge {...args}>
      <div style={{ width: '48px', height: '48px', backgroundColor: '#ddd', borderRadius: '8px' }} />
    </Badge>
  ),
  args: {
    isDot: true,
    variant: 'success',
    size: 'sm',
  },
};