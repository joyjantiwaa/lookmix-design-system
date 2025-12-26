
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './shopping-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ShoppingLinearIconProps = Omit<IconProps, 'icon'>;

export function ShoppingLinearIcon({ className, ...rest }: ShoppingLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Shopping Bag (ตัวอย่าง: solar:bag-2-linear)
      icon="solar:bag-2-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.shoppingLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default ShoppingLinearIcon;