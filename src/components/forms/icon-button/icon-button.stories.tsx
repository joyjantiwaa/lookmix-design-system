import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
  title: 'Forms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'squircle', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['ghost', 'filled', 'outline', 'surface', 'glass'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

// 1. รวมทุก Variants (โชว์ความแตกต่างของพื้นหลัง)
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px', background: args.variant === 'glass' ? '#007AFF' : 'transparent' }}>
      <IconButton {...args} variant="filled" icon="mingcute:add-line" />
      <IconButton {...args} variant="outline" icon="mingcute:search-line" />
      <IconButton {...args} variant="surface" icon="mingcute:settings-3-line" />
      <IconButton {...args} variant="ghost" icon="mingcute:delete-2-line" />
      <IconButton {...args} variant="glass" icon="mingcute:notification-line" />
    </div>
  ),
};

// 2. โชว์รูปทรง (Shapes)
export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <IconButton {...args} shape="circle" variant="filled" icon="mingcute:check-line" />
      <IconButton {...args} shape="squircle" variant="filled" icon="mingcute:check-line" />
      <IconButton {...args} shape="rounded" variant="filled" icon="mingcute:check-line" />
    </div>
  ),
};

// 3. ทุกขนาด (Sizes)
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <IconButton {...args} size="xs" variant="outline" icon="mingcute:heart-line" />
      <IconButton {...args} size="sm" variant="outline" icon="mingcute:heart-line" />
      <IconButton {...args} size="md" variant="outline" icon="mingcute:heart-line" />
      <IconButton {...args} size="lg" variant="outline" icon="mingcute:heart-line" />
      <IconButton {...args} size="xl" variant="outline" icon="mingcute:heart-line" />
    </div>
  ),
};

// 4. แบบลิงก์ (As Link)
export const AsLink: Story = {
  args: {
    icon: 'mingcute:external-link-line',
    href: 'https://google.com',
    external: true,
    variant: 'surface',
    shape: 'squircle'
  },
};