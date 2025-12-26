import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './sock-linear.module.scss';

export type SockLinearIconProps = Omit<IconProps, 'icon'>;

export function SockLinearIcon({ className, ...rest }: SockLinearIconProps) {
  return (
    <Icon 
      // ดึงจาก Hugeicons (socks)
      icon="hugeicons:socks" 
      className={classNames(styles.sockLinearIcon, className)} 
      {...rest} 
    />
  );
}