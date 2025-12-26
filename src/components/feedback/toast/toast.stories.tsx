import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Toast } from './toast';
import { Button } from '../../forms/button/button'; 

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClose: { action: 'closed' },
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// 1. แสดงตัวอย่าง Toast ครบทุกสถานะ
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Toast id="1" type="success" message="Item added to cart successfully!" onClose={() => {}} />
      <Toast id="2" type="error" message="Could not process payment. Please try again." onClose={() => {}} />
      <Toast id="3" type="warning" message="Your session is about to expire." onClose={() => {}} />
      <Toast id="4" type="info" message="New version of the app is available." onClose={() => {}} />
    </div>
  ),
};

// 2. จำลองการใช้งานจริง (Toast Manager Simulator)
export const ToastSimulator: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{ id: string; type: any; message: string }[]>([]);

    const addToast = (type: any, message: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, message }]);
    };

    const removeToast = (id: string) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
      <div style={{ height: '300px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={() => addToast('success', 'Saved!')}>Success</Button>
          <Button onClick={() => addToast('error', 'Failed!')}>Error</Button>
        </div>

        {/* ตัวจำลอง Container ที่อยู่มุมขวาบนหน้าจอ */}
        <div style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 9999
        }}>
          {toasts.map((t) => (
            <Toast key={t.id} {...t} onClose={removeToast} />
          ))}
        </div>
      </div>
    );
  }
};