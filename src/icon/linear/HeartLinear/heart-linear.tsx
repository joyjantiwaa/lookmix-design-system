
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './heart-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type HeartLinearIconProps = Omit<IconProps, 'icon'>;

export function HeartLinearIcon({ className, ...rest }: HeartLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Heart (ตัวอย่าง: solar:heart-linear)
      icon="solar:heart-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.heartLinearIcon, className)} 
      {...rest} 
    />
  );
}