import type { Meta, StoryObj } from '@storybook/react-vite';
import { CartItem } from './cart-item';

const meta: Meta<typeof CartItem> = {
  title: 'E-commerce/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {
    onQuantityChange: { action: 'quantity changed' },
    onRemove: { action: 'item removed' },
  },
  // ปรับขนาด Container เพื่อให้เห็นหน้าตาเหมือนอยู่ในหน้าตะกร้าสินค้าจริงๆ
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '500px', padding: '20px', background: 'white' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

// 1. สินค้าปกติ (มีครบทุกอย่าง)
export const Default: Story = {
  args: {
    id: '1',
    title: 'Minimalist Cotton T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200',
    price: 590,
    quantity: 1,
    properties: [
      { label: 'Color', value: 'White' },
      { label: 'Size', value: 'L' },
    ],
  },
};

// 2. สินค้าที่มีจำนวนมากกว่า 1 (เช็คการคำนวณราคา)
export const MultipleItems: Story = {
  args: {
    id: '2',
    title: 'Premium Denim Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200',
    price: 1250,
    quantity: 2,
    properties: [
      { label: 'Size', value: '32' },
    ],
  },
};

// 3. สินค้าที่ไม่มี Properties (เช่น เครื่องประดับหรือสินค้า Free size)
export const NoProperties: Story = {
  args: {
    id: '3',
    title: 'Classic Leather Belt',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=200',
    price: 890,
    quantity: 1,
  },
};

// 4. แสดงแบบรายการในตะกร้า (List View)
export const CartList: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CartItem {...args} title="Item 1" price={500} id="1" />
      <CartItem {...args} title="Item 2" price={1200} id="2" />
      <CartItem {...args} title="Item 3" price={350} id="3" />
    </div>
  ),
  args: {
    image: 'https://via.placeholder.com/90x120',
    quantity: 1,
    onQuantityChange: () => {},
    onRemove: () => {},
  }
};