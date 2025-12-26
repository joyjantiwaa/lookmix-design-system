import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties; // 1. เพิ่มบรรทัดนี้เพื่อให้รองรับ inline style ครับ
}

export function Label({
  children,
  htmlFor,
  required,
  disabled,
  size = 'md',
  className,
  style, // 2. รับค่า style มาจาก props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={style} // 3. นำมาใส่ที่ tag <label>
      className={classNames(
        styles.label,
        styles[size],
        {
          [styles.required]: required,
          [styles.disabled]: disabled,
        },
        className
      )}
    >
      {children}
      {required && <span className={styles.asterisk} aria-hidden="true">*</span>}
    </label>
  );
}