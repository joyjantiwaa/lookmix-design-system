import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';
import { Spinner } from './spinner';

const meta: Meta = {
  title: 'Feedback/Loading',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

/**
 * --- Spinner Stories ---
 */
export const Spinners: StoryObj<typeof Spinner> = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size={64} color="var(--colors-error-default)" />
    </div>
  ),
};

/**
 * --- Skeleton Stories ---
 */
export const Skeletons: StoryObj<typeof Skeleton> = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Skeleton {...args} variant="circular" width={60} height={60} />
      <Skeleton {...args} variant="text" width="80%" />
      <Skeleton {...args} variant="rectangular" width="100%" height={100} />
    </div>
  ),
  args: {
    animation: 'pulse',
  },
};

/**
 * --- Practical Example (Product Card Loading) ---
 */
export const SkeletonExample: StoryObj = {
  render: () => (
    <div style={{ 
      width: '250px', 
      padding: 'var(--spacing-large)',              // ใช้ Variable แทน 1rem
      border: '1px solid var(--borders-default-color)', // ใช้ Variable แทน #eee
      borderRadius: 'var(--borders-radius-large)',  // ใช้ Variable แทน 12px
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-medium)'                  // ใช้ Variable แทน 12px
    }}>
      {/* ... ส่วนของ Skeleton ... */}
    </div>
  ),
};