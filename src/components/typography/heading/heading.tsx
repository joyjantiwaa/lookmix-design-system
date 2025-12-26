import React from 'react';
import classNames from 'classnames';
import type { HeadingLevel } from './heading-level-type';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * The semantic level of the heading.
   * @default 'h2'
   */
  level?: HeadingLevel;

  /**
   * The content to be rendered within the heading.
   */
  children?: React.ReactNode;

  /**
   * Optional visual override for the heading size.
   * Allows a heading to semantically be one level but visually look like another.
   */
  visualLevel?: HeadingLevel;

  /**
   * If true, changes the text color to the inverse color for dark backgrounds.
   */
  inverseColor?: boolean;

  /**
   * Additional class name for custom styling.
   */
  className?: string;

  /**
   * Inline styles for the component.
   */
  style?: React.CSSProperties;
};

export function Heading({
  children,
  level = 'h2',
  visualLevel,
  inverseColor = false,
  className,
  style,
}: HeadingProps) {
  const Tag = level as keyof React.JSX.IntrinsicElements;
  const sizeClass = visualLevel ? styles[visualLevel] : styles[level];

  return (
    <Tag
      style={style}
      className={classNames(
        styles.heading,
        sizeClass,
        {
          [styles.inverse]: inverseColor,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}