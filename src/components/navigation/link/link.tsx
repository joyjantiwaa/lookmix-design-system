import React, { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { Link as RouterLink, useLocation, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export type LinkProps = {
  /**
   * The URL that the link points to.
   */
  href?: string;
  /**
   * If true, forces the link to be rendered as an external `<a>` tag.
   * If false, tries to use `react-router-dom`'s `Link`.
   */
  external?: boolean;
  /**
   * If true, removes default styles from the link, making it a naked wrapper.
   */
  noStyles?: boolean;
  /**
   * Specifies where to open the linked document.
   */
  target?: string;
  /**
   * Specifies the relationship between the current document and the linked document.
   */
  rel?: string;
  /**
   * The content to display inside the link.
   */
  children?: ReactNode;
  /**
   * Additional CSS class names.
   */
  className?: string;
  /**
   * If true, the link will be disabled (non-interactive).
   */
  disabled?: boolean;
  /**
   * Inline styles for the link.
   */
  style?: React.CSSProperties;
  /**
   * Click handler.
   */
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
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
  const isAnchor = isExternal || target === '_blank';

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
    if (onClick) {
      onClick(e);
    }
  };

  if (disabled) {
    return (
      <span className={commonClasses} style={style} role="link" aria-disabled="true">
        {children}
      </span>
    );
  }

  if (isAnchor) {
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
      target={target}
      rel={rel}
      onClick={handleClick}
      style={style}
      {...rest}
    >
      {children}
    </RouterLink>
  );
}

export { useLocation, useParams, useNavigate };

/**
 * Wrapper for useSearchParams to match the requested API "useSearchQuery".
 */
export function useSearchQuery() {
  const [searchParams] = useSearchParams();
  return searchParams;
}