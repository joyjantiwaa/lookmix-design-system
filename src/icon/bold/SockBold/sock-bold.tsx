import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './sock-bold.module.scss';

export type SockBoldIconProps = Omit<IconProps, 'icon'>;

export function SockBoldIcon({ className, ...rest }: SockBoldIconProps) {
  return (
    <Icon 
      // ดึงจาก Font Awesome 7 (socks-solid)
      icon="fa7-solid:socks" 
      className={classNames(styles.sockBoldIcon, className)} 
      {...rest} 
    />
  );
}