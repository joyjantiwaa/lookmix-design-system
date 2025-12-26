import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrderStatusTimeline } from './order-status-timeline';

const meta: Meta<typeof OrderStatusTimeline> = {
  title: 'E-commerce/OrderStatusTimeline',
  component: OrderStatusTimeline,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem', background: 'white' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderStatusTimeline>;

const mockEvents = [
  {
    id: '1',
    status: 'Order Placed',
    description: 'We have received your order and it is being processed.',
    timestamp: '24 Dec 2024, 10:30',
    isCompleted: true,
  },
  {
    id: '2',
    status: 'Payment Confirmed',
    description: 'Your payment has been successfully verified.',
    timestamp: '24 Dec 2024, 10:45',
    isCompleted: true,
  },
  {
    id: '3',
    status: 'Shipped',
    description: 'Your package is on the way. Tracking No: TH123456789',
    timestamp: '25 Dec 2024, 14:20',
    isCompleted: true,
  },
  {
    id: '4',
    status: 'Out for Delivery',
    description: 'The courier is delivering your package to your location.',
    timestamp: '26 Dec 2024, 09:00',
    isCompleted: false,
  },
  {
    id: '5',
    status: 'Delivered',
    description: 'Package has been delivered to the recipient.',
    timestamp: '--:--',
    isCompleted: false,
  },
];

// 1. สถานะปกติ (แสดงประวัติการจัดส่ง)
export const Default: Story = {
  args: {
    events: mockEvents,
  },
};

// 2. สถานะเริ่มต้น (เพิ่งสั่งซื้อ)
export const NewOrder: Story = {
  args: {
    events: [
      {
        id: '1',
        status: 'Order Placed',
        description: 'Waiting for payment verification.',
        timestamp: 'Just now',
        isCompleted: true,
      },
      {
        id: '2',
        status: 'Payment',
        description: 'Please complete your payment.',
        timestamp: '',
        isCompleted: false,
      },
    ],
  },
};