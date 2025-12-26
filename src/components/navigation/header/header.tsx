import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import { Logo } from '../../data-display/logo';
import { Link } from '../../navigation/link';
import { IconButton } from '../../forms/icon-button/icon-button';
import { ArrowLeftIcon } from './arrow-left-icon';
import type { HeaderNavItem } from './header-nav-item-type';
import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * Defines the visual style and layout of the header.
   * 'website' renders a standard navbar with logo and links.
   * 'app' renders a mobile-style app bar with back button and title.
   * @default 'website'
   */
  variant?: 'website' | 'app';

  /**
   * Title text to display in the center of the App header.
   * Only applicable when variant is 'app'.
   */
  title?: string;

  /**
   * Navigation links to display in the Website header.
   * Only applicable when variant is 'website'.
   */
  navItems?: HeaderNavItem[];

  /**
   * Main action button to display on the right side of the Website header.
   * @example <Button>Download</Button>
   */
  action?: ReactNode;

  /**
   * Callback function for the back button in the App header.
   * If provided, a back arrow icon will be rendered on the left.
   * Only applicable when variant is 'app'.
   */
  onBack?: () => void;

  /**
   * Additional content or icons to display on the right side of the App header.
   * Only applicable when variant is 'app'.
   */
  rightContent?: ReactNode;

  /**
   * Name of the brand to pass to the Logo component.
   * @default 'LOOKMIX'
   */
  logoName?: string;

  /**
   * URL for the logo link.
   * @default '/'
   */
  logoHref?: string;

  /**
   * Custom logo element to override the default text logo.
   */
  customLogo?: ReactNode;

  /**
   * Additional class name for the root element.
   */
  className?: string;

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties;
};

export function Header({
  variant = 'website',
  title,
  navItems = [],
  action,
  onBack,
  rightContent,
  logoName = 'LOOKMIX',
  logoHref = '/',
  customLogo,
  className,
  style,
}: HeaderProps) {
  const isWebsite = variant === 'website';
  const isApp = variant === 'app';

  return (
    <header
      className={classNames(
        styles.header,
        {
          [styles.website]: isWebsite,
          [styles.app]: isApp,
        },
        className
      )}
      style={style}
    >
      <div className={styles.container}>
        {isWebsite && (
          <>
            <div className={styles.left}>
              {customLogo || <Logo name={logoName} href={logoHref} />}
            </div>

            <nav className={styles.nav}>
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className={styles.actions}>
              {action}
            </div>
          </>
        )}

        {isApp && (
          <>
            <div className={styles.left}>
              {onBack && (
                <IconButton
                  onClick={onBack}
                  icon={<ArrowLeftIcon />} // ส่งผ่าน prop icon ตามที่นิยามไว้ใน type
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label="Go back"
                />
              )}
            </div>

            <div className={styles.center}>
              {title && <h1 className={styles.appTitle}>{title}</h1>}
            </div>

            <div className={styles.right}>
              {rightContent}
            </div>
          </>
        )}
      </div>
    </header>
  );
}