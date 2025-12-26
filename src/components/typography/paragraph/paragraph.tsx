import React from 'react';
import classNames from 'classnames';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
  /**
   * The text content to display.
   */
  children?: React.ReactNode;

  /**
   * The HTML element to render the paragraph as.
   * Can be any valid HTML tag like 'p', 'span', 'div', 'h1', etc.
   * Defaults to 'p'.
   */
  element?: keyof React.JSX.IntrinsicElements;

  /**
   * Size of the text.
   * Defaults to 'body-default'.
   */
  size?: 'body-large' | 'body-medium' | 'body-default' | 'body-small' | 'caption';

  /**
   * Color of the text.
   * Defaults to 'primary'.
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse';

  /**
   * Custom class name to apply to the root element.
   */
  className?: string;

  /**
   * Custom inline styles.
   */
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>;

export function Paragraph({
  children,
  element = 'p',
  size = 'body-default',
  color = 'primary',
  className,
  style,
  ...rest
}: ParagraphProps) {
  const Component = element as React.ElementType;

  const sizeClass = {
    'body-large': styles.bodyLarge,
    'body-medium': styles.bodyMedium,
    'body-default': styles.bodyDefault,
    'body-small': styles.bodySmall,
    'caption': styles.caption,
  }[size];

  const colorClass = {
    'primary': styles.textPrimary,
    'secondary': styles.textSecondary,
    'tertiary': styles.textTertiary,
    'inverse': styles.textInverse,
  }[color];

  return (
    <Component
      {...rest}
      style={style}
      className={classNames(
        styles.paragraph,
        sizeClass,
        colorClass,
        className
      )}
    >
      {children}
    </Component>
  );
}