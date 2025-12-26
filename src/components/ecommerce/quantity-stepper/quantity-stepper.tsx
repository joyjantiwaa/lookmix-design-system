import React from 'react';
import classNames from 'classnames';
import { Icon } from '@iconify/react';
import styles from './quantity-stepper.module.scss';

export type QuantityStepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
  disabled?: boolean;
};

export function QuantityStepper({ 
  value, 
  min = 1, 
  max = 99, 
  onChange, 
  disabled 
}: QuantityStepperProps) {

  // ฟังก์ชันลดจำนวน
  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  // ฟังก์ชันเพิ่มจำนวน
  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  return (
    <div className={classNames(styles.stepper, { [styles.disabled]: disabled })}>
      {/* ปุ่มลดราคา (-) */}
      <button 
        type="button" 
        onClick={handleDecrement} 
        disabled={disabled || value <= min}
        className={styles.button}
        aria-label="Decrease quantity"
      >
        <Icon icon="ic:round-minus" width="20" height="20" />
      </button>
      
      {/* ตัวเลขแสดงจำนวน */}
      <span className={styles.value}>{value}</span>
      
      {/* ปุ่มเพิ่มราคา (+) */}
      <button 
        type="button" 
        onClick={handleIncrement} 
        disabled={disabled || value >= max}
        className={styles.button}
        aria-label="Increase quantity"
      >
        <Icon icon="ic:round-plus" width="20" height="20" />
      </button>
    </div>
  );
}