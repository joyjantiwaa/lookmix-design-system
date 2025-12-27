import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './header';
import { Button } from '../../forms/button';
import { IconButton } from '../../forms/icon-button/icon-button';
import { Icon } from '../../../icon/icon'; 

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    router: true,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// 1. Website Variant - แบบปกติที่ใช้บนหน้าแรก
export const Website: Story = {
  args: {
    variant: 'website',
    logoName: 'LOOKMIX',
    navItems: [
      { label: 'Shop', href: '/shop' },
      { label: 'Collection', href: '/collection' },
      { label: 'Trends', href: '/trends' },
      { label: 'About', href: '/about' },
    ],
    action: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button appearance="tertiary">Log in</Button>
        <Button appearance="primary">Sign up</Button>
      </div>
    ),
  },
};

// 2. App Variant - แบบที่ใช้บน Mobile หรือหน้าย่อย
export const MobileApp: Story = {
  args: {
    variant: 'app',
    title: 'Product Details',
    onBack: () => alert('Back clicked'),
    rightContent: (
      <IconButton 
        icon={<Icon icon="mingcute:share-forward-line" />} 
        variant="ghost" 
        size="sm"
      />
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// 3. App Variant - หน้าที่ต้องการปุ่มปิด (Close)
export const ModalHeader: Story = {
  args: {
    variant: 'app',
    title: 'Filters',
    onBack: () => alert('Close clicked'),
    // เราสามารถใช้ custom back icon เป็นกากบาทได้ถ้าต้องการ
    rightContent: <Button appearance="tertiary" size="sm">Reset</Button>,
  },
};