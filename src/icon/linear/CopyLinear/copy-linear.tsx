
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './copy-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type CopyLinearIconProps = Omit<IconProps, 'icon'>;

export function CopyLinearIcon({ className, ...rest }: CopyLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Copy (ตัวอย่าง: solar:copy-linear)
      icon="solar:copy-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.copyLinearIcon, className)} 
      {...rest} 
    />
  );
}