import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './lock-linear.module.scss';

export type LockLinearIconProps = Omit<IconProps, 'icon'>;

export function LockLinearIcon({ className, ...rest }: LockLinearIconProps) {
  return (
    <Icon 
      icon="solar:lock-password-linear" 
      className={classNames(styles.lockLinearIcon, className)} 
      {...rest} 
    />
  );
}