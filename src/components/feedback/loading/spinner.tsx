
import classNames from 'classnames';
import styles from './loading.module.scss';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | number;
  color?: string;
  className?: string;
}

export function Spinner({ size = 'md', color, className }: SpinnerProps) {
  const sizeValue = typeof size === 'number' ? size : undefined;

  return (
    <div
      className={classNames(
        styles.spinner,
        typeof size === 'string' ? styles[size] : '',
        className
      )}
      style={{
        ...(sizeValue ? { width: sizeValue, height: sizeValue } : {}),
        ...(color ? { borderTopColor: color } : {}),
      }}
      role="status"
    >
      <span className={styles.srOnly}>Loading...</span>
    </div>
  );
}