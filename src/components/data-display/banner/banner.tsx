import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import { Button } from '../../forms/button';
import { Heading } from '../../typography/heading';
import { Paragraph } from '../../typography/paragraph';
import { Image } from '../image';
import styles from './banner.module.scss';

export type BannerProps = {
  /**
   * Primary headline text for the banner.
   */
  title?: string | ReactNode;

  /**
   * Secondary description text or supporting copy.
   */
  subtitle?: string | ReactNode;

  /**
   * Label for the primary call-to-action button.
   * If provided along with `onCtaClick` or `ctaHref`, a Button will be rendered.
   */
  ctaText?: string;

  /**
   * URL for the call-to-action button navigation.
   */
  ctaHref?: string;

  /**
   * Callback function for the call-to-action button click.
   */
  onCtaClick?: () => void;

  /**
   * Custom action element to replace the default CTA button or add secondary actions.
   */
  action?: ReactNode;

  /**
   * URL for the background image.
   * If provided, the banner will render an absolute positioned image behind the content.
   */
  backgroundImage?: string;

  /**
   * URL for a foreground image (e.g., a product shot or phone mockup).
   * Renders below the text in default layout.
   */
  foregroundImage?: string;

  /**
   * Visual style variant of the banner.
   * - `hero`: Large padding, display typography, full width.
   * - `promotional`: Medium padding, standard heading sizes.
   * - `alert`: Compact, row layout (on desktop), intended for notifications.
   * @default 'hero'
   */
  variant?: 'hero' | 'promotional' | 'alert';

  /**
   * Text and content alignment.
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Whether to apply a semi-transparent dark overlay on the background image
   * to improve text readability.
   * @default false
   */
  overlay?: boolean;

  /**
   * Inverts text colors to white.
   * Useful when using dark background images or colors.
   * @default false
   */
  inverse?: boolean;

  /**
   * Custom class name for the root element.
   */
  className?: string;

  /**
   * Custom inline styles.
   */
  style?: React.CSSProperties;

  /**
   * Additional content to render inside the banner content area.
   */
  children?: ReactNode;
};

export function Banner({
  title,
  subtitle,
  ctaText,
  ctaHref,
  onCtaClick,
  action,
  backgroundImage,
  foregroundImage,
  variant = 'hero',
  align = 'center',
  overlay = false,
  inverse = false,
  className,
  children,
  style,
  ...rest
}: BannerProps) {
  const isAlert = variant === 'alert';
  const headingLevel = isAlert ? 'h6' : (variant === 'hero' ? 'h1' : 'h2');
  
  // For hero variant, we might want to use visual overrides if strictly following design system
  // typically Hero uses Display sizes, which Heading component handles via class/style or visually
  // but we handle it via SCSS classes on the container for specific adjustments.

  const renderActions = () => {
    if (action) return action;
    if (ctaText) {
      return (
        <Button
          appearance={inverse ? 'secondary' : 'primary'}
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      );
    }
    return null;
  };

  const actionContent = renderActions();

  return (
    <div
      className={classNames(
        styles.banner,
        styles[variant],
        styles[align],
        {
          [styles.inverse]: inverse,
        },
        className
      )}
      style={style}
      {...rest}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            className={styles.background}
            fit="cover"
          />
          {overlay && <div className={styles.overlay} />}
        </>
      )}

      <div className={styles.content}>
        {(title || subtitle) && (
          <div className={styles.textWrapper}>
            {title && (
              <Heading
                level={headingLevel}
                className={styles.title}
                inverseColor={inverse}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Paragraph
                size={isAlert ? 'body-small' : 'body-large'}
                color={inverse ? 'inverse' : 'primary'}
                className={styles.subtitle}
              >
                {subtitle}
              </Paragraph>
            )}
          </div>
        )}

        {actionContent && (
          <div className={styles.actions}>
            {actionContent}
          </div>
        )}

        {children}

        {foregroundImage && (
          <div className={styles.foregroundImageWrapper}>
            <Image
              src={foregroundImage}
              alt="Banner Visual"
              width="auto"
              height="auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}