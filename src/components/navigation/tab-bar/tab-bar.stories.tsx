import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router-dom';
import { TabBar } from './tab-bar';
import { Icon } from '../../../icon/icon';

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ padding: '2rem', backgroundColor: 'var(--colors-surface-background)' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TabBar>;

// 1. แบบปกติ (ใช้เป็น Button)
export const Default: Story = {
  args: {
    selectedValue: 'all',
    items: [
      { label: 'All Items', value: 'all' },
      { label: 'Pending', value: 'pending' },
      { label: 'Completed', value: 'completed' },
      { label: 'Cancelled', value: 'cancelled' },
    ],
    onTabChange: (val) => console.log('Selected Tab:', val),
  },
};

// 2. แบบมีไอคอน (Icon with Label)
export const WithIcons: Story = {
  args: {
    selectedValue: 'home',
    items: [
      { 
        label: 'Home', 
        value: 'home', 
        icon: <Icon icon="mingcute:home-6-line" /> 
      },
      { 
        label: 'Messages', 
        value: 'messages', 
        icon: <Icon icon="mingcute:message-3-line" /> 
      },
      { 
        label: 'Settings', 
        value: 'settings', 
        icon: <Icon icon="mingcute:settings-3-line" /> 
      },
    ],
  },
};

// 3. แบบ Link (ใช้เปลี่ยนหน้า URL)
export const AsLinks: Story = {
  args: {
    selectedValue: 'profile',
    items: [
      { label: 'Profile', value: 'profile', href: '/profile' },
      { label: 'Orders', value: 'orders', href: '/orders' },
      { label: 'Payments', value: 'payments', href: '/payments' },
    ],
  },
};

// 4. แบบขยายเต็มความกว้าง (Full Width)
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    selectedValue: 'feed',
    items: [
      { label: 'Feed', value: 'feed' },
      { label: 'Explore', value: 'explore' },
      { label: 'Personal', value: 'personal' },
    ],
  },
};