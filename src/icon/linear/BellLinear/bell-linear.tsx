
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './bell-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type BellLinearIconProps = Omit<IconProps, 'icon'>;

export function BellLinearIcon({ className, ...rest }: BellLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Bell (ตัวอย่าง: solar:bell-linear)
      icon="solar:bell-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.bellLinearIcon, className)} 
      {...rest} 
    />
  );
}