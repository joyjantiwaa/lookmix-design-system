
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './card-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type CardLinearIconProps = Omit<IconProps, 'icon'>;

export function CardLinearIcon({ className, ...rest }: CardLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Card (ตัวอย่าง: solar:card-linear)
      icon="solar:card-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.cardLinearIcon, className)} 
      {...rest} 
    />
  );
}