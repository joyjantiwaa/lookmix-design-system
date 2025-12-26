import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import { Image } from '../image';
import { Heading } from '../../typography/heading';
import styles from './card.module.scss';

export type CardVariant = 'default' | 'glass' | 'compact';

export type CardProps = {
  /**
   * Main content of the card.
   */
  children?: ReactNode;

  /**
   * Optional title displayed at the top of the content area.
   */
  title?: string;

  /**
   * Content to render in the header section.
   */
  header?: ReactNode;

  /**
   * Content to render in the footer section.
   */
  footer?: ReactNode;

  /**
   * URL of the image to display at the top of the card.
   */
  image?: string;

  /**
   * Alt text for the image.
   */
  imageAlt?: string;

  /**
   * Visual style variant of the card.
   * 'default': Clean, white, elevated card.
   * 'glass': Frosted glass effect with border.
   * 'compact': Smaller padding and radius for grid items.
   * @default 'default'
   */
  variant?: CardVariant;

  /**
   * Enables interactive states (hover, active) and pointer cursor.
   * @default false
   */
  interactive?: boolean;

  /**
   * Custom class name for the root element.
   */
  className?: string;

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties;

  /**
   * Click handler for the card.
   */
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
  children,
  title,
  header,
  footer,
  image,
  imageAlt,
  variant = 'default',
  interactive = false,
  className,
  onClick,
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={classNames(
        styles.card,
        styles[variant],
        interactive && styles.interactive,
        className
      )}
      onClick={interactive ? onClick : undefined}
      style={style}
      {...rest}
    >
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={imageAlt || ''}
            width="100%"
          />
        </div>
      )}
      
      {header && <div className={styles.header}>{header}</div>}

      <div className={styles.content}>
        {title && (
          <Heading level="h4" className={styles.title}>
            {title}
          </Heading>
        )}
        {children}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}