import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './wardrobe-linear.module.scss';

export type WardrobeLinearIconProps = Omit<IconProps, 'icon'>;

export function WardrobeLinearIcon({ className, ...rest }: WardrobeLinearIconProps) {
  return (
    <Icon 
      // ใน Iconify สไตล์ Light ของ Phosphor จะใช้ชื่อ "ph:dresser-light"
      icon="ph:dresser-light" 
      className={classNames(styles.wardrobeLinearIcon, className)} 
      {...rest} 
    />
  );
}