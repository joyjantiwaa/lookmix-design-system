
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './shopping-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type ShoppingBoldIconProps = Omit<IconProps, 'icon'>;

export function ShoppingBoldIcon({ className, ...rest }: ShoppingBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Shopping Bag (ตัวอย่าง: solar:shop-2-bold หรือ solar:bag-bold)
      icon="solar:shop-2-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.shoppingBoldIcon, className)} 
      {...rest} 
    />
  );
}