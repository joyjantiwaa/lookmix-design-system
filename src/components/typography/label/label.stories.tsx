import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

// 1. แบบพื้นฐาน
export const Default: Story = {
  args: {
    children: 'Username',
  },
};

// 2. แบบบังคับกรอก (Required)
export const Required: Story = {
  args: {
    children: 'Email Address',
    required: true,
  },
};

// 3. แสดงขนาดต่างๆ (Sizes)
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Label size="sm">Small Label</Label>
      <Label size="md">Medium Label (Default)</Label>
      <Label size="lg">Large Label</Label>
    </div>
  ),
};

// 4. สถานะปิดการใช้งาน (Disabled)
export const Disabled: Story = {
  args: {
    children: 'ReadOnly Field',
    disabled: true,
  },
};

// 5. ตัวอย่างการใช้ร่วมกับ Input (Integration)
export const WithInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor="test-input" required>Password</Label>
      <input 
        id="test-input" 
        type="password" 
        placeholder="Enter your password"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
      />
    </div>
  ),
};