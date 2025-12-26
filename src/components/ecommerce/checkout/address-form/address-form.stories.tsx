import type { Meta, StoryObj } from '@storybook/react-vite';
import { AddressForm } from './address-form';

const meta: Meta<typeof AddressForm> = {
  title: 'E-commerce/AddressForm',
  component: AddressForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'form submitted' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '2rem auto', backgroundColor: '#f5f5f5', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddressForm>;

// 1. แบบปกติ (Default View)
export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Address Data:', data),
  },
};

// 2. แบบแสดงบนมือถือ (Mobile View Preview)
// Storybook จะช่วยจำลองขนาดหน้าจอให้
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    onSubmit: (data) => console.log('Mobile Submit:', data),
  },
};