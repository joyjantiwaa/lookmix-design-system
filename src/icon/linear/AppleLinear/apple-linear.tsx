import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './apple-linear.module.scss';

export type AppleLinearIconProps = Omit<IconProps, 'icon'>;

export function AppleLinearIcon({ className, ...rest }: AppleLinearIconProps) {
  return (
    <Icon 
      // ดึงจาก Hugeicons collection
      icon="hugeicons:apple" 
      className={classNames(styles.appleLinearIcon, className)} 
      {...rest} 
    />
  );
}