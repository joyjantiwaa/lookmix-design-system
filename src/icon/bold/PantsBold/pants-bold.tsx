import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './pants-bold.module.scss';

export type PantsBoldIconProps = Omit<IconProps, 'icon'>;

export function PantsBoldIcon({ className, ...rest }: PantsBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Phosphor Icons
      icon="ph:pants-fill" 
      className={classNames(styles.pantsBoldIcon, className)} 
      {...rest} 
    />
  );
}