import React from 'react';
import classNames from 'classnames';
import styles from './divider.module.scss';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  type?: 'solid' | 'dashed' | 'dotted';
  children?: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties; // 1. เพิ่มบรรทัดนี้
}

export function Divider({
  orientation = 'horizontal',
  type = 'solid',
  children,
  textAlign = 'center',
  className,
  style,
}: DividerProps) {
  const hasContent = children && orientation === 'horizontal';

  return (
    <div
      style={style}
      className={classNames(
        styles.divider,
        styles[orientation],
        styles[type],
        {
          [styles.withContent]: hasContent,
          [styles[`textAlign-${textAlign}`]]: hasContent,
        },
        className
      )}
      role="separator"
    >
      {hasContent && <span className={styles.content}>{children}</span>}
    </div>
  );
}