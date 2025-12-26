import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'E-commerce/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    onAddToCart: { action: 'added to cart' },
    onClick: { action: 'card clicked' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '280px', margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

// 1. สินค้าปกติ (Basic)
export const Default: Story = {
  args: {
    id: 'p1',
    title: 'Essential Oversized T-Shirt',
    brand: 'LOOKMIX ORIGINALS',
    price: 590,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
    href: '#',
  },
};

// 2. สินค้าที่มีส่วนลดและป้าย (Sale & Tag)
export const OnSale: Story = {
  args: {
    id: 'p2',
    title: 'Classic Denim Jacket Premium Quality with Vintage Finish',
    brand: 'DENIM CO.',
    tag: 'Sale',
    price: 1890,
    discountPrice: 1290,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800',
    href: '#',
  },
};

// 3. สินค้าใหม่ (New Arrival)
export const NewArrival: Story = {
  args: {
    id: 'p3',
    title: 'Leather Messenger Bag',
    brand: 'CRAFTED',
    tag: 'New',
    price: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800',
    href: '#',
  },
};

// 4. สินค้าหมด (Out of Stock)
export const OutOfStock: Story = {
  args: {
    id: 'p4',
    title: 'Minimalist Wrist Watch',
    brand: 'TIMELINE',
    price: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800',
    isOutOfStock: true,
    href: '#',
  },
};

// 5. แสดงแบบ Grid (หลายรายการ)
export const ProductGrid: Story = {
  render: (args) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
      gap: '20px',
      maxWidth: '1000px'
    }}>
      <ProductCard {...args} id="1" title="Product 1" price={500} tag="New" />
      <ProductCard {...args} id="2" title="Product 2 with a very long title that should wrap correctly" price={800} discountPrice={600} />
      <ProductCard {...args} id="3" title="Product 3" price={1200} isOutOfStock />
      <ProductCard {...args} id="4" title="Product 4" price={450} />
    </div>
  ),
  decorators: [(Story) => <div style={{ width: '100%' }}><Story /></div>]
};