import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './pants-linear.module.scss';

export type PantsLinearIconProps = Omit<IconProps, 'icon'>;

export function PantsLinearIcon({ className, ...rest }: PantsLinearIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Phosphor Icons (แบบเส้น)
      icon="ph:pants" 
      className={classNames(styles.pantsLinearIcon, className)} 
      {...rest} 
    />
  );
}