import React from 'react';
import classNames from 'classnames';
import styles from './badge.module.scss';

export interface BadgeProps {
  content?: string | number; // ข้อความหรือตัวเลข
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md';
  isDot?: boolean;           // ถ้าเป็น true จะโชว์แค่จุดเล็กๆ (เช่น บอกสถานะ Online)
  max?: number;              // กำหนดค่าสูงสุด เช่น ถ้าเป็น 99 แล้ว content เป็น 100 จะโชว์ 99+
  children?: React.ReactNode; // ถ้าใส่ children เข้ามา Badge จะไปแปะอยู่ที่มุมขวาบนของ children นั้น
  className?: string;
  style?: React.CSSProperties;
}

export function Badge({
  content,
  variant = 'primary',
  size = 'md',
  isDot = false,
  max = 99,
  children,
  className,
}: BadgeProps) {
  
  // จัดการตัวเลขถ้าเกินค่า max
  const displayContent = typeof content === 'number' && content > max ? `${max}+` : content;

  const badgeElement = (
    <span
      className={classNames(
        styles.badge,
        styles[variant],
        styles[size],
        {
          [styles.dot]: isDot,
          [styles.overlap]: !!children, // ถ้ามีลูก จะใช้ตำแหน่ง absolute
        },
        className
      )}
    >
      {!isDot && displayContent}
    </span>
  );

  if (!children) {
    return badgeElement;
  }

  return (
    <div className={styles.badgeContainer}>
      {children}
      {badgeElement}
    </div>
  );
}