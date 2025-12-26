import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from './text-input';
import { Icon } from '../../../icon/icon'; // สมมติว่าพี่มี Component Icon นะครับ

const meta: Meta<typeof TextInput> = {
  title: 'Forms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// 1. แบบพื้นฐาน
export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'example@domain.com',
    id: 'email-input',
  },
};

// 2. แบบมีไอคอน (Leading & Trailing)
export const WithIcons: Story = {
  args: {
    label: 'Search Product',
    placeholder: 'Search for clothes...',
    leadingIcon: <Icon icon="mingcute:search-line" size={20} />,
    trailingIcon: <Icon icon="mingcute:close-circle-fill" size={18} />,
  },
};

// 3. แบบมีข้อผิดพลาด (Error State)
export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    value: '123',
    error: 'Password must be at least 8 characters long.',
  },
};

// 4. สถานะปิดการใช้งาน (Disabled)
export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'johndoe_locked',
    disabled: true,
  },
};

// 5. สำหรับรหัสผ่าน (Password)
export const Password: Story = {
  args: {
    label: 'Create Password',
    type: 'password',
    placeholder: 'Enter your password',
    trailingIcon: <Icon icon="mingcute:eye-close-line" size={20} />,
  },
};