import React from 'react';
import { Link } from '../../navigation/link';
import classNames from 'classnames';
import styles from './tab-bar.module.scss';
import type { TabBarItem } from './tab-bar-item-type';

export type TabBarProps = {
  /**
   * List of tab items to render.
   */
  items: TabBarItem[];

  /**
   * The currently selected tab value.
   */
  selectedValue?: string;

  /**
   * Callback function when a tab is clicked/selected.
   */
  onTabChange?: (value: string) => void;

  /**
   * ✅ If true, tabs will expand to fill the available width equally.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional class name for the container.
   */
  className?: string;

  /**
   * Inline styles for the container.
   */
  style?: React.CSSProperties;
};

export function TabBar({
  items,
  selectedValue,
  onTabChange,
  fullWidth = false,
  className,
  style,
}: TabBarProps) {
  return (
    <nav
      className={classNames(
        styles.tabBar,
        {
          [styles.fullWidth]: fullWidth,
        },
        className
      )}
      style={style}
      role="tablist"
    >
      {items.map((item) => {
        const isSelected = selectedValue === item.value;

        const handleClick = () => {
          // Prevent default only if it's not a link or we want to handle navigation manually
          onTabChange?.(item.value);
        };

        const content = (
          <>
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </>
        );

        const tabClasses = classNames(styles.tab, {
          [styles.active]: isSelected,
        });

        if (item.href) {
          return (
            <Link
              key={item.value}
              href={item.href}
              onClick={handleClick}
              className={tabClasses}
              role="tab"
              aria-selected={isSelected}
              noStyles
            >
              {content}
            </Link>
          );
        }

        return (
          <button
            key={item.value}
            type="button"
            onClick={handleClick}
            className={tabClasses}
            role="tab"
            aria-selected={isSelected}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}