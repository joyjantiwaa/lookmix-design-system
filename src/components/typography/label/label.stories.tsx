import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  // จัดกลุ่มให้อยู่ภายใต้ Typography ตามโครงสร้างโฟลเดอร์ของพี่
  title: 'Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'ขนาดของตัวอักษร (Default: 12px, Medium: 13px)',
      control: 'inline-radio',
      options: ['default', 'medium'],
    },
    color: {
      description: 'สีของตัวอักษรตาม Tokens',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    as: {
      description: 'HTML Tag ที่ต้องการใช้ Render',
      control: 'select',
      options: ['span', 'label', 'p'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/**
 * 1. Caption Default (12px)
 * ใช้สำหรับข้อความอธิบายขนาดเล็ก หรือ Metadata
 */
export const CaptionDefault: Story = {
  args: {
    children: 'Caption Default - Inter 12px / 18px',
    variant: 'default',
    color: 'primary',
  },
};

/**
 * 2. Caption Medium (13px)
 * ขนาดพิเศษสำหรับ Label ที่ต้องการความชัดเจนขึ้นมาอีกระดับ
 */
export const CaptionMedium: Story = {
  args: {
    children: 'Caption Medium - Inter 13px',
    variant: 'medium',
    color: 'primary',
  },
};

/**
 * 3. Color Variants
 * แสดงความแตกต่างระหว่างสี Primary และ Secondary
 */
export const ColorComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label color="primary" variant="default">Primary Text (12px)</Label>
      <Label color="secondary" variant="default">Secondary Text (12px)</Label>
    </div>
  ),
};

/**
 * 4. All Sizes Comparison
 * แสดงการเปรียบเทียบขนาด 12px และ 13px พร้อมกัน
 */
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <div style={{ marginBottom: '4px', opacity: 0.5, fontSize: '10px' }}>VARIANT: DEFAULT (12px)</div>
        <Label variant="default">The quick brown fox jumps over the lazy dog.</Label>
      </div>
      <div>
        <div style={{ marginBottom: '4px', opacity: 0.5, fontSize: '10px' }}>VARIANT: MEDIUM (13px)</div>
        <Label variant="medium">The quick brown fox jumps over the lazy dog.</Label>
      </div>
    </div>
  ),
};