import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Forms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 1. รวมทุกสี (Appearances)
export const AllAppearances: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button {...args} appearance="primary">Primary</Button>
      <Button {...args} appearance="secondary">Secondary</Button>
      <Button {...args} appearance="tertiary">Tertiary</Button>
      <Button {...args} appearance="danger">Danger</Button>
    </div>
  ),
};

// 2. ขนาดต่างๆ (Sizes)
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

// 3. สถานะ Loading (ปุ่มจะกดไม่ได้และแสดง Spinner)
export const Loading: Story = {
  args: {
    children: 'Processing',
    loading: true,
    appearance: 'primary',
  },
};

// 4. แบบ Link (Polymorphic Behavior)
// สังเกตว่าถ้าใส่ href มันจะ Render เป็นแท็ก <a> อัตโนมัติ
export const AsLink: Story = {
  args: {
    children: 'Go to Google',
    href: 'https://google.com',
    external: true,
    appearance: 'secondary',
  },
};

// 5. เต็มความกว้าง (Full Width - สำหรับ Mobile)
export const FullWidth: Story = {
  args: {
    children: 'Checkout Now',
    fullWidth: true,
    appearance: 'primary',
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};