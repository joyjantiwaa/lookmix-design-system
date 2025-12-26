import { useState, useCallback } from 'react';

/**
 * Hook สำหรับจัดการสถานะ เปิด/ปิด (Boolean state)
 * @param initialState สถานะเริ่มต้น (Default: false)
 */
export function useDisclosure(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle,
    // ส่งค่านี้ไปให้ Modal เพื่ออัปเดต state จากภายในได้
    setIsOpen, 
  };
}