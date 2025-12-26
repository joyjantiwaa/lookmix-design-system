import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import classNames from 'classnames';
import { Link, type LinkProps } from '../../navigation/link/link';
import { type ButtonAppearance } from './button-appearance-type';
import styles from './button.module.scss';

export type ButtonSize = 'sm' | 'md' | 'lg';

// 1. Common Props ที่ใช้ร่วมกันทั้งแบบ Button และ Link
type CommonButtonProps = {
  children?: ReactNode;
  appearance?: ButtonAppearance; // รองรับ 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost'
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  fullWidth?: boolean; // เพิ่มเพื่อรองรับการขยายเต็มพื้นที่
  loading?: boolean; //
};

// 2. Props สำหรับปุ่มกดปกติ (HTML Button)
type ButtonAsButton = CommonButtonProps & {
  href?: undefined;
  external?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'disabled' | 'type' | 'onClick'>;

// 3. Props สำหรับปุ่มที่เป็นลิงก์ (HTML Anchor)
type ButtonAsLink = CommonButtonProps & {
  href: string;
  external?: boolean;
  type?: undefined;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Omit<LinkProps, 'children' | 'className' | 'disabled' | 'href' | 'external' | 'onClick'>;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  children,
  appearance = 'primary',
  size = 'md',
  className,
  disabled,
  style,
  fullWidth, // รับค่า fullWidth มาใช้งาน
  loading,
  ...props
}: ButtonProps) {
  
  // สร้าง Class โดยรวมเอาสถานะและหน้าตาเข้าด้วยกัน
  const buttonClasses = classNames(
    styles.button,
    styles[appearance],
    styles[size],
    {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
      [styles.loading]: loading, // ถ้าส่ง fullWidth={true} จะเพิ่มคลาส .fullWidth ใน CSS
    },
    className
  );

  const content = (
    <>
      {loading && <span className={styles.spinner} />} {/* เพิ่มตัวหมุนถ้า loading เป็น true */}
      <span className={styles.label}>{children}</span>
    </>
  );

  if ('href' in props && props.href !== undefined) {
    const { href, external, onClick, ...restOfLinkProps } = props as ButtonAsLink;

    return (
      <Link
        href={(disabled || loading) ? undefined : href}
        className={buttonClasses}
        external={external}
        disabled={disabled || loading}
        onClick={onClick}
        style={style}
        {...(restOfLinkProps as any)}
      >
        {content}
      </Link>
    );
  }

  const { type = 'button', onClick, ...restOfButtonProps } = props as ButtonAsButton;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
      {...restOfButtonProps}
    >
      {content}
    </button>
  );
}