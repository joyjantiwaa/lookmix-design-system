import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggler } from './theme-toggler';
import { ThemeProvider } from '../../../theme/theme-controller';

const meta: Meta<typeof ThemeToggler> = {
  title: 'Components/ThemeToggler',
  component: ThemeToggler,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ 
          padding: '2rem', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '150px',
          // ดึงค่าสีจาก CSS Variables ที่พี่ตั้งไว้ในแอป
          backgroundColor: 'var(--colors-surface-background)',
          borderRadius: '12px',
          transition: 'all 0.3s ease'
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggler>;

export const Default: Story = {};

export const CustomStyle: Story = {
  args: {
    className: 'custom-toggler',
  },
};