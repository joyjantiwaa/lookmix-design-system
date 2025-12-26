import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Link>;

// 1. ลิงก์ภายในแอป (Internal Link)
export const Default: Story = {
  args: {
    href: '/dashboard',
    children: 'Go to Dashboard',
  },
};

// 2. ลิงก์ภายนอกแอป (External Link)
export const External: Story = {
  args: {
    href: 'https://google.com',
    external: true,
    children: 'Open Google',
    target: '_blank',
  },
};

// 3. แบบไม่มีสไตล์ (Naked Link)
export const NoStyles: Story = {
  args: {
    href: '/profile',
    noStyles: true,
    children: (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Card as a Link</h3>
        <p>This entire box is clickable without link colors.</p>
      </div>
    ),
  },
};

// 4. สถานะปิดการใช้งาน (Disabled)
export const Disabled: Story = {
  args: {
    href: '/settings',
    disabled: true,
    children: 'Settings (Locked)',
  },
};