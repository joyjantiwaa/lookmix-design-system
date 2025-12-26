import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { QuantityStepper } from './quantity-stepper';

const meta: Meta<typeof QuantityStepper> = {
  title: 'E-commerce/QuantityStepper',
  component: QuantityStepper,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof QuantityStepper>;

// 1. แบบ Interactive (ให้ลองกดเล่นใน Storybook)
export const Interactive: Story = {
  render: (args) => {
    const [val, setVal] = useState(args.value ?? 1);
    return (
      <QuantityStepper 
        {...args} 
        value={val} 
        onChange={(v) => {
          setVal(v);
          args.onChange(v);
        }} 
      />
    );
  },
  args: {
    value: 1,
    min: 1,
    max: 10,
  },
};

// 2. สถานะปิดการใช้งาน (Disabled)
export const Disabled: Story = {
  args: {
    value: 5,
    disabled: true,
  },
};

// 3. เมื่อถึงค่าต่ำสุด (Minimum reached)
export const MinReached: Story = {
  args: {
    value: 1,
    min: 1,
  },
};

// 4. เมื่อถึงค่าสูงสุด (Maximum reached)
export const MaxReached: Story = {
  args: {
    value: 99,
    max: 99,
  },
};