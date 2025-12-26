import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './wardrobe-bold.module.scss';

export type WardrobeBoldIconProps = Omit<IconProps, 'icon'>;

export function WardrobeBoldIcon({ className, ...rest }: WardrobeBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Phosphor Icons (dresser-fill)
      icon="ph:dresser-fill" 
      className={classNames(styles.wardrobeBoldIcon, className)} 
      {...rest} 
    />
  );
}