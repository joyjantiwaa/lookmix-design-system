import React from 'react'; // อย่าลืม import React
import classNames from 'classnames';
import styles from './loading.module.scss';

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
  style?: React.CSSProperties; // 1. เพิ่มบรรทัดนี้เพื่อให้รับ style ได้
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className,
  style, // 2. รับ style มาจาก props
}: SkeletonProps) {
  return (
    <div
      className={classNames(
        styles.skeleton,
        styles[variant],
        styles[animation],
        className
      )}
      // 3. รวม style จาก width/height และ style ที่ส่งมาจากภายนอก
      style={{ 
        width, 
        height, 
        ...style 
      }}
    />
  );
}