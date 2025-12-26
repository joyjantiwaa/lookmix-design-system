import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './dress-bold.module.scss';

export type DressBoldIconProps = Omit<IconProps, 'icon'>;

export function DressBoldIcon({ className, ...rest }: DressBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Phosphor Icons (แบบทึบ)
      icon="ph:dress-fill" 
      className={classNames(styles.dressBoldIcon, className)} 
      {...rest} 
    />
  );
}