import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './empty-state';

const meta: Meta<typeof EmptyState> = {
  title: 'Data Display/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// 1. เคสตะกร้าสินค้าว่างเปล่า
export const EmptyCart: Story = {
  args: {
    icon: 'mingcute:shopping-cart-1-line',
    title: 'Your cart is empty',
    description: 'Looks like you haven’t added anything to your cart yet. Start shopping to find something you love!',
    actionLabel: 'Continue Shopping',
    onAction: () => console.log('Go to shop'),
  },
};

// 2. เคสหาผลการค้นหาไม่เจอ
export const NoSearchResults: Story = {
  args: {
    icon: 'mingcute:search-3-line',
    title: 'No results found',
    description: 'We couldn’t find anything matching your search. Try checking your spelling or using different keywords.',
    actionLabel: 'Clear Search',
    onAction: () => console.log('Clear search'),
  },
};

// 3. เคสไม่มีประวัติการสั่งซื้อ
export const NoOrders: Story = {
  args: {
    icon: 'mingcute:bill-line',
    title: 'No orders yet',
    description: 'When you place an order, it will appear here.',
  },
};