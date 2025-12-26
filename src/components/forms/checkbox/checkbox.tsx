import React, { useId } from 'react';
import classNames from 'classnames';
import styles from './checkbox.module.scss';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean; // สถานะกึ่งกลาง
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size = 'md', indeterminate, className, disabled, ...props }, ref) => {
    const defaultId = useId();
    const id = props.id || defaultId;

    // จัดการสถานะ Indeterminate ผ่าน Ref
    React.useEffect(() => {
      if (ref && typeof ref !== 'function' && ref.current) {
        ref.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate, ref]);

    return (
      <div className={classNames(styles.checkboxContainer, styles[size], { [styles.disabled]: disabled }, className)}>
        <div className={styles.inputWrapper}>
          <input
            type="checkbox"
            className={styles.hiddenInput}
            id={id}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          <div className={styles.control}>
            {/* ไอคอนเครื่องหมายถูก (จะแสดงผ่าน CSS เมื่อ :checked) */}
            <svg 
              className={styles.checkIcon} 
              viewBox="0 0 12 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" // ลดความหนาลงจาก 3.5 เหลือ 2.8
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="1.5 5 4.5 8 10.5 2" />
            </svg>
            {/* ไอคอนขีดกึ่งกลาง (จะแสดงผ่าน CSS เมื่อ indeterminate) */}
            <div className={styles.indeterminateIcon} />
          </div>
        </div>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';