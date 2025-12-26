import React from 'react';
import classNames from 'classnames';
import { Link } from '../../navigation/link/link';
import { Icon } from '../../../icon/icon';
import styles from './icon-button.module.scss';
import type { IconButtonProps } from './icon-button.type';

export function IconButton({
  icon,
  href,
  onClick,
  disabled,
  size = 'md',
  shape = 'circle',
  variant = 'ghost',
  className,
  style,
  external,
  target,
  rel,
  type = 'button',
}: IconButtonProps) {
  const iconSizeMap = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  const classes = classNames(
    styles.iconButton,
    styles[size],
    styles[shape],
    styles[variant],
    { [styles.disabled]: disabled },
    className
  );

  const content = (
    <span className={styles.icon}>
      {/* เช็คถ้าเป็น string ค่อยส่งให้ <Icon /> ถ้าไม่ใช่ให้วาดตรงๆ */}
      {typeof icon === 'string' ? (
        <Icon icon={icon} size={iconSizeMap[size]} />
      ) : (
        icon
      )}
    </span>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        onClick={onClick}
        external={external}
        target={target}
        rel={rel}
        noStyles
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
