
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './cart-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type CartLinearIconProps = Omit<IconProps, 'icon'>;

export function CartLinearIcon({ className, ...rest }: CartLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Cart (ตัวอย่าง: solar:cart-large-minimalistic-linear)
      icon="solar:cart-large-minimalistic-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.cartLinearIcon, className)} 
      {...rest} 
    />
  );
}