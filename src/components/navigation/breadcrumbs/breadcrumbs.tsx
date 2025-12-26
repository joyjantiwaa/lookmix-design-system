
import { Link } from '../../navigation/link/link';
import { Icon } from '../../../icon/icon';
import styles from './breadcrumbs.module.scss';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              {!isLast && item.href ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <Icon icon="mingcute:right-line" size={14} className={styles.separator} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}