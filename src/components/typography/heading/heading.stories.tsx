import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    visualLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    inverseColor: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

// 1. แสดงระดับทั้งหมด (H1 - H6)
export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level="h1">Heading Level 1</Heading>
      <Heading level="h2">Heading Level 2</Heading>
      <Heading level="h3">Heading Level 3</Heading>
      <Heading level="h4">Heading Level 4</Heading>
      <Heading level="h5">Heading Level 5</Heading>
      <Heading level="h6">Heading Level 6</Heading>
    </div>
  ),
};

// 2. การใช้ Visual Override (Semantic เป็น H1 แต่ขนาดเป็น H3)
export const VisualOverride: Story = {
  args: {
    level: 'h1',
    visualLevel: 'h3',
    children: 'Semantic H1, but looks like H3',
  },
};

// 3. สี Inverse สำหรับพื้นหลังเข้ม
export const Inverse: Story = {
  args: {
    level: 'h2',
    inverseColor: true,
    children: 'Inverse Heading',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#333' }}>
        <Story />
      </div>
    ),
  ],
};