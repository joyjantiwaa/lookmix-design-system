
import { Icon, type IconProps } from '../../icon'; // ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './cart-bold.module.scss';

export type CartBoldIconProps = Omit<IconProps, 'icon'>;

export function CartBoldIcon({ className, ...rest }: CartBoldIconProps) {
  return (
    <Icon 
      // ใส่รหัสไอคอนตะกร้า (ตัวอย่าง: solar:cart-large-minimalistic-bold)
      icon="solar:cart-large-minimalistic-bold" 
      // ผสม class เพื่อให้ยังทำงานร่วมกับไฟล์ .scss เฉพาะตัวได้
      className={classNames(styles.cartBoldIcon, className)} 
      {...rest} 
    />
  );
}