import React, { type AnchorHTMLAttributes, type ReactNode } from 'react';
import {
  Link as RouterLink,
  useInRouterContext,
} from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export type LinkProps = {
  href?: string;
  external?: boolean;
  noStyles?: boolean;
  target?: string;
  rel?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>;

export function Link({
  href = '#',
  external = false,
  noStyles = false,
  children,
  className,
  disabled,
  target,
  rel,
  onClick,
  style,
  ...rest
}: LinkProps) {
  const inRouter = useInRouterContext();

  const isExternal =
    external ||
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel');

  const commonClasses = classNames(
    {
      [styles.link]: !noStyles,
      [styles.noStyles]: noStyles,
      [styles.disabled]: disabled,
    },
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  if (disabled) {
    return (
      <span className={commonClasses} style={style} aria-disabled>
        {children}
      </span>
    );
  }

  // ✅ ไม่มี Router → fallback เป็น <a>
  if (!inRouter || isExternal || target === '_blank') {
    return (
      <a
        href={href}
        className={commonClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={handleClick}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={href}
      className={commonClasses}
      onClick={handleClick}
      style={style}
      {...rest}
    >
      {children}
    </RouterLink>
  );
}
