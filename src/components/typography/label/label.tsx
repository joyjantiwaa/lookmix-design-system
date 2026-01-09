import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export type LabelProps = {
  children: React.ReactNode;
  /** ประเภทของ Label */
  variant?: 'default' | 'medium';
  /** สีของข้อความ */
  color?: 'primary' | 'secondary';
  /** คลาสเพิ่มเติม */
  className?: string;
  /** HTML Tag ที่ต้องการใช้ (default: span) */
  as?: 'span' | 'label' | 'p';
};

export function Label({
  children,
  variant = 'default',
  color = 'primary',
  className,
  as: Component = 'span',
}: LabelProps) {
  const labelClasses = classNames(
    styles.labelBase,
    {
      [styles.captionDefault]: variant === 'default',
      [styles.captionMedium]: variant === 'medium',
      [styles.primary]: color === 'primary',
      [styles.secondary]: color === 'secondary',
    },
    className
  );

  return <Component className={labelClasses}>{children}</Component>;
}