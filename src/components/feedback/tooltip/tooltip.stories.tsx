import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip', // จัดกลุ่มให้อยู่ใน Atoms
  component: Tooltip,
  parameters: {
    layout: 'centered', // ให้ Component อยู่กลางหน้าจอ Storybook
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// 1. ตัวอย่างแบบพื้นฐาน
export const Default: Story = {
  args: {
    content: 'นี่คือข้อความ Tooltip',
    children: <button style={{ padding: '8px 16px' }}>เอาเมาส์มาวางที่นี่</button>,
    position: 'top',
  },
};

// 2. แสดงตัวอย่างทุกตำแหน่งพร้อมกัน
export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', padding: '50px' }}>
      <Tooltip content="Tooltip ด้านบน" position="top">
        <button>Top</button>
      </Tooltip>
      
      <Tooltip content="Tooltip ด้านล่าง" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      
      <Tooltip content="Tooltip ด้านซ้าย" position="left">
        <button>Left</button>
      </Tooltip>
      
      <Tooltip content="Tooltip ด้านขวา" position="right">
        <button>Right</button>
      </Tooltip>
    </div>
  ),
};

// 3. ตัวอย่างแบบใช้กับข้อความ
export const InlineText: Story = {
  args: {
    content: 'ข้อมูลเพิ่มเติม',
    children: <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>อ่านต่อตรงนี้</span>,
    position: 'top',
  },
};