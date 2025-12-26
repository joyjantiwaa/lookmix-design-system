import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DateInput } from './date-input';

const meta: Meta<typeof DateInput> = {
  title: 'Forms/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ paddingBottom: '350px', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

// 1. แบบพื้นฐาน (Interactive)
export const Interactive: Story = {
  render: (args) => {
    const [date, setDate] = useState<string>('');
    return (
      <DateInput 
        {...args} 
        value={date} 
        onChange={(newDate) => {
          setDate(newDate);
          args.onChange?.(newDate);
        }} 
      />
    );
  },
  args: {
    label: 'วันเกิด (Birthday)',
    placeholder: 'เลือกวันเกิดของคุณ',
  },
};

// 2. แบบระบุวันที่เริ่มต้น (Pre-filled)
export const PreFilled: Story = {
  args: {
    label: 'วันที่จอง (Booking Date)',
    value: '2025-12-25',
  },
};

// 3. แสดงหลายอันพร้อมกัน (เช็คการชนกันของ Floating)
export const MultipleInputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <DateInput label="Start Date" />
      <DateInput label="End Date" />
    </div>
  ),
};