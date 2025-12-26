import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './modal';
import { Button } from '../../forms/button/button'; // สมมติ path นะครับ

const meta: Meta<typeof Modal> = {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen', // เพราะ Modal มี Overlay เต็มจอ
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// 1. แบบพื้นฐาน (ใช้งานร่วมกับ State)
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal 
          {...args} 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
        >
          <p>This is the modal content. You can put any React elements here.</p>
        </Modal>
      </div>
    );
  },
  args: {
    title: 'Example Modal',
    size: 'md',
  },
};

// 2. แบบมี Footer (Action Modal)
export const WithFooter: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true); // เปิดไว้ให้ดูเป็นตัวอย่างเลย
    return (
      <Modal 
        {...args} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <Button appearance="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Modal>
    );
  },
  args: {
    title: 'Confirmation Required',
    size: 'sm',
  },
};

// 3. แบบ Full Screen (สำหรับหน้าจอจัดการข้อมูลเยอะๆ)
export const FullScreen: Story = {
  args: {
    isOpen: true,
    title: 'Full Screen Editor',
    size: 'full',
    children: (
      <div style={{ height: '1000px', background: 'linear-gradient(#fff, #f0f0f0)' }}>
        <p>Scroll down to see the sticky header/footer behavior.</p>
      </div>
    ),
  },
};