
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './clock-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ClockLinearCircleIconProps = Omit<IconProps, 'icon'>;

export function ClockLinearCircleIcon({ className, ...rest }: ClockLinearCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Clock Circle (ตัวอย่าง: solar:clock-circle-linear)
      icon="solar:clock-circle-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.clockLinearCircleIcon, className)} 
      {...rest} 
    />
  );
}