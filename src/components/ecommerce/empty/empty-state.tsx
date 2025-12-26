
import classNames from 'classnames';
import { Icon } from '../../../icon/icon';
import { Heading } from '../../typography/heading';
import { Paragraph } from '../../typography/paragraph';
import { Button } from '../../forms/button';
import styles from './empty-state.module.scss';

export type EmptyStateProps = {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

export function EmptyState({
  icon = 'mingcute:box-line',
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={classNames(styles.emptyState, className)}>
      <div className={styles.iconWrapper}>
        <Icon icon={icon} size={64} color="var(--colors-text-tertiary)" />
      </div>
      <Heading level="h4" className={styles.title}>{title}</Heading>
      {description && (
        <Paragraph color="secondary" className={styles.description}>
          {description}
        </Paragraph>
      )}
      {actionLabel && onAction && (
        <Button appearance="primary" onClick={onAction} className={styles.action}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}