import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './lock-bold.module.scss';

export type LockBoldIconProps = Omit<IconProps, 'icon'>;

export function LockBoldIcon({ className, ...rest }: LockBoldIconProps) {
  return (
    <Icon 
      icon="solar:lock-password-bold" 
      className={classNames(styles.lockBoldIcon, className)} 
      {...rest} 
    />
  );
}