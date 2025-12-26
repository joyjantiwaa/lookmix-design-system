import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SegmentedControl } from './segmented-control';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Navigation/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

// 1. แบบพื้นฐาน (Interactive)
export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('workwear');
    return (
      <SegmentedControl 
        {...args} 
        value={selected} 
        onChange={(v) => {
          setSelected(v);
          args.onChange?.(v);
        }} 
      />
    );
  },
};

// 2. แบบมีตัวเลือกจำนวนมาก (Scrollable)
export const ManyOptions: Story = {
  args: {
    options: [
      { label: 'All Items', value: 'all' },
      { label: 'New Arrivals', value: 'new' },
      { label: 'Summer Collection', value: 'summer' },
      { label: 'Winter Essentials', value: 'winter' },
      { label: 'Best Sellers', value: 'best' },
      { label: 'Limited Edition', value: 'limited' },
      { label: 'Sale', value: 'sale' },
    ],
    value: 'all',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// 3. แบบมีบางตัวเลือกถูกปิดใช้งาน (With Disabled Options)
export const WithDisabled: Story = {
  args: {
    options: [
      { label: 'Standard', value: 'std' },
      { label: 'Express', value: 'exp' },
      { label: 'Same Day', value: 'same', disabled: true },
    ],
    value: 'std',
  },
};