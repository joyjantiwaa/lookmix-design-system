
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './close-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type CloseLinearCircleIconProps = Omit<IconProps, 'icon'>;

export function CloseLinearCircleIcon({ className, ...rest }: CloseLinearCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Close Circle (ตัวอย่าง: solar:close-circle-linear)
      icon="solar:close-circle-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.closeLinearCircleIcon, className)} 
      {...rest} 
    />
  );
}