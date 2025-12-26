import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 1. แบบพื้นฐานพร้อม Label
export const Default: Story = {
  args: {
    label: 'ยอมรับเงื่อนไขการใช้บริการ',
    size: 'md',
  },
};

// 2. สถานะต่างๆ (States)
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="ยังไม่ได้เลือก (Unchecked)" />
      <Checkbox label="เลือกแล้ว (Checked)" defaultChecked />
      <Checkbox label="เลือกบางส่วน (Indeterminate)" indeterminate />
      <Checkbox label="ปิดการใช้งาน (Disabled)" disabled />
      <Checkbox label="ปิดการใช้งานขณะเลือกอยู่ (Disabled Checked)" disabled defaultChecked />
    </div>
  ),
};

// 3. ขนาดต่างๆ (Sizes)
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

// 4. การใช้งานจริง (Parent-Child Checkbox)
export const ParentChildExample: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState([false, false]);
    
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems([e.target.checked, e.target.checked]);
    };

    const handleChildChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newItems = [...checkedItems];
      newItems[index] = e.target.checked;
      setCheckedItems(newItems);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox 
          label="เลือกทั้งหมด (Category)" 
          checked={allChecked}
          indeterminate={isIndeterminate}
          onChange={handleParentChange}
        />
        <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox label="สินค้าชิ้นที่ 1" checked={checkedItems[0]} onChange={handleChildChange(0)} />
          <Checkbox label="สินค้าชิ้นที่ 2" checked={checkedItems[1]} onChange={handleChildChange(1)} />
        </div>
      </div>
    );
  }
};