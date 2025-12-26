import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Data Display/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 12, max: 120, step: 4 },
    },
    color: { control: 'color' },
    icon: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// 1. แบบใช้ Iconify String (มาตรฐาน)
export const FromIconify: Story = {
  args: {
    icon: 'mingcute:apple-fill',
    size: 48,
    color: 'var(--colors-text-primary)',
  },
};

// 2. แบบใช้ Children (Custom SVG)
export const CustomChildren: Story = {
  render: (args) => (
    <Icon {...args}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </Icon>
  ),
  args: {
    size: 64,
    color: 'var(--colors-primary-default)',
  },
};

// 3. แสดงขนาดต่างๆ (Icon Scales)
export const Scales: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon icon="mingcute:heart-fill" size={16} color="#ef4444" />
      <Icon icon="mingcute:heart-fill" size={24} color="#ef4444" />
      <Icon icon="mingcute:heart-fill" size={32} color="#ef4444" />
      <Icon icon="mingcute:heart-fill" size={48} color="#ef4444" />
    </div>
  ),
};

// 4. แสดงการเปลี่ยนสี (Color Variants)
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Icon icon="mingcute:check-circle-fill" color="var(--colors-status-positive-default)" />
      <Icon icon="mingcute:close-circle-fill" color="var(--colors-status-negative-default)" />
      <Icon icon="mingcute:information-fill" color="var(--colors-primary-default)" />
    </div>
  ),
};