import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    textAlign: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// 1. เส้นนอนแบบปกติ (Horizontal)
export const Horizontal: Story = {
  render: () => (
    <div>
      <p>เนื้อหาส่วนบน</p>
      <Divider />
      <p>เนื้อหาส่วนล่าง</p>
    </div>
  ),
};

// 2. เส้นนอนแบบมีข้อความ (With Content)
export const WithText: Story = {
  args: {
    children: 'OR',
    textAlign: 'center',
    type: 'solid',
  },
};

// 3. ปรับตำแหน่งข้อความ (Text Alignment)
export const TextAlignment: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Divider textAlign="left">Left Aligned</Divider>
      <Divider textAlign="center">Center Aligned</Divider>
      <Divider textAlign="right">Right Aligned</Divider>
    </div>
  ),
};

// 4. เส้นประและเส้นจุด (Dashed & Dotted)
export const BorderTypes: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Divider type="dashed">Dashed Line</Divider>
      <Divider type="dotted">Dotted Line</Divider>
    </div>
  ),
};

// 5. เส้นตั้ง (Vertical) - มักใช้แยกเมนู
export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '24px' }}>
      <span>Link A</span>
      <Divider orientation="vertical" />
      <span>Link B</span>
      <Divider orientation="vertical" />
      <span>Link C</span>
    </div>
  ),
};