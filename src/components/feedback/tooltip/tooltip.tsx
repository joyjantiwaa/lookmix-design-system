import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './tooltip.module.scss';

export type TooltipProps = {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
};

export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={classNames(styles.tooltipWrapper, className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={classNames(styles.tooltipContent, styles[position])}>
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
}