import type { Meta, StoryObj } from '@storybook/react-vite';
import { PropertySelector } from './property-selector';
import { useState } from 'react';

const meta: Meta<typeof PropertySelector> = {
  title: 'E-commerce/PropertySelector', // จัดกลุ่มตามโครงสร้างที่พี่ต้องการ
  component: PropertySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'color'],
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof PropertySelector>;

// --- Helper สำหรับจัดการ State ใน Storybook ---
const PropertySelectorWithState = (args: any) => {
  const [value, setValue] = useState(args.selectedValue || '');
  return <PropertySelector {...args} selectedValue={value} onChange={setValue} />;
};

// 1. แบบเลือกขนาด (Text Type)
export const SizeSelector: Story = {
  render: (args) => <PropertySelectorWithState {...args} />,
  args: {
    label: 'Select Size',
    type: 'text',
    options: [
      { label: 'S', value: 's' },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
      { label: 'XL', value: 'xl', disabled: true }, // ตัวอย่างกรณีของหมด
    ],
    selectedValue: 'm',
  },
};

// 2. แบบเลือกสี (Color Type)
export const ColorSelector: Story = {
  render: (args) => <PropertySelectorWithState {...args} />,
  args: {
    label: 'Select Color',
    type: 'color',
    options: [
      { label: 'Midnight Black', value: 'black', color: '#1A1A1A' },
      { label: 'Cloud White', value: 'white', color: '#FFFFFF' },
      { label: 'Pacific Blue', value: 'blue', color: '#3B82F6' },
      { label: 'Sunset Red', value: 'red', color: '#EF4444' },
    ],
    selectedValue: 'black',
  },
};

// 3. แสดงหลายตัวพร้อมกัน (PDP Example)
export const ProductDetailPreview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '320px' }}>
      <PropertySelectorWithState
        label="Color"
        type="color"
        options={[
          { label: 'Green', value: 'g', color: '#22C55E' },
          { label: 'Yellow', value: 'y', color: '#EAB308' },
        ]}
      />
      <PropertySelectorWithState
        label="Size"
        type="text"
        options={[
          { label: '38', value: '38' },
          { label: '39', value: '39' },
          { label: '40', value: '40' },
        ]}
      />
    </div>
  ),
};