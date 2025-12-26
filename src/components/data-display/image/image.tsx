import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type ImageProps = {
  /**
   * The source URL of the image.
   */
  src: string;

  /**
   * The alt text for the image.
   */
  alt: string;

  /**
   * The width of the image.
   */
  width?: number | string;

  /**
   * The height of the image.
   */
  height?: number | string;

  /**
   * How the image should be resized to fit its container.
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

  /**
   * Additional class name for the image.
   */
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({
  src,
  alt,
  width,
  height,
  fit,
  className,
  style,
  ...rest
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(styles.image, className)}
      style={{
        objectFit: fit,
        ...style,
      }}
      loading="lazy"
      {...rest}
    />
  );
}