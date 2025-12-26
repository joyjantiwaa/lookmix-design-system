import type { Meta, StoryObj } from '@storybook/react-vite';
import { PriceSummary } from './price-summary';

const meta: Meta<typeof PriceSummary> = {
  title: 'E-commerce/PriceSummary',
  component: PriceSummary,
  tags: ['autodocs'],
  argTypes: {
    onCheckout: { action: 'checkout clicked' },
    subtotal: { control: { type: 'number', min: 0 } },
    shippingFee: { control: { type: 'number', min: 0 } },
    discount: { control: { type: 'number', min: 0 } },
    isLoading: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PriceSummary>;

// 1. แบบปกติ (Default)
export const Default: Story = {
  args: {
    subtotal: 1590,
    shippingFee: 50,
    discount: 0,
    isLoading: false,
  },
};

// 2. มีส่วนลดและส่งฟรี (Discount & Free Shipping)
export const WithDiscount: Story = {
  args: {
    subtotal: 2500,
    shippingFee: 0,
    discount: 300,
    isLoading: false,
  },
};

// 3. สถานะกำลังโหลด (Processing Checkout)
export const Loading: Story = {
  args: {
    subtotal: 1200,
    shippingFee: 45,
    discount: 100,
    isLoading: true,
  },
};

// 4. เคสราคาสูง (High Value Order)
export const HighValue: Story = {
  args: {
    subtotal: 125000,
    shippingFee: 0,
    discount: 5000,
    isLoading: false,
  },
};