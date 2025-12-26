import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '300px', maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'กรุงเทพมหานคร', value: 'bkk' },
  { label: 'เชียงใหม่', value: 'cnx' },
  { label: 'ภูเก็ต', value: 'hkt' },
  { label: 'ขอนแก่น', value: 'kkc' },
  { label: 'ชลบุรี', value: 'chy' },
];

// 1. แบบพื้นฐาน (Interactive)
export const Interactive: Story = {
  render: (args) => {
    const [val, setVal] = useState<string | number>('');
    return (
      <Select 
        {...args} 
        value={val} 
        onChange={(v) => {
          setVal(v);
          args.onChange?.(v);
        }} 
      />
    );
  },
  args: {
    label: 'จังหวัดที่อยู่ (Province)',
    options: options,
    placeholder: 'เลือกจังหวัดของคุณ',
  },
};

// 2. สถานะ Disabled
export const Disabled: Story = {
  args: {
    label: 'ประเภทสมาชิก (Member Type)',
    options: options,
    disabled: true,
    value: 'bkk',
  },
};

// 3. แบบมีตัวเลือกจำนวนมาก (Scrollable Test)
export const ManyOptions: Story = {
  args: {
    label: 'เลือกสาขาที่ใกล้บ้าน',
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `สาขาที่ ${i + 1}`,
      value: i + 1,
    })),
  },
};