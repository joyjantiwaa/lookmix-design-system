import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckoutStepper } from './checkout-stepper';

const meta: Meta<typeof CheckoutStepper> = {
  title: 'E-commerce/CheckoutStepper',
  component: CheckoutStepper,
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 1, max: 3 },
      description: 'ขั้นตอนปัจจุบัน (1-3)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckoutStepper>;

const commonSteps = [
  { id: 1, label: 'Cart' },
  { id: 2, label: 'Shipping' },
  { id: 3, label: 'Payment' },
];

// 1. เริ่มต้นขั้นตอนแรก (Step 1 Active)
export const Step1: Story = {
  args: {
    steps: commonSteps,
    currentStep: 1,
  },
};

// 2. ขั้นตอนกลาง (Step 2 Active, Step 1 Completed)
export const Step2: Story = {
  args: {
    steps: commonSteps,
    currentStep: 2,
  },
};

// 3. ขั้นตอนสุดท้าย (Step 3 Active, Step 1 & 2 Completed)
export const Step3: Story = {
  args: {
    steps: commonSteps,
    currentStep: 3,
  },
};

// 4. แสดงการเปลี่ยนสถานะแบบ Interactive
// ลองเลื่อน Slider ในหน้า Storybook ดูได้เลยครับ
export const Interactive: Story = {
  args: {
    steps: commonSteps,
    currentStep: 1,
  },
};