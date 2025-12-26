
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './copyright-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่เราระบุเอง)
export type CopyrightCircleLinearIconProps = Omit<IconProps, 'icon'>;

export function CopyrightCircleLinearIcon({ className, ...rest }: CopyrightCircleLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Copyright (ตัวอย่าง: solar:copyright-linear)
      icon="solar:copyright-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.copyrightCircleLinearIcon, className)} 
      {...rest} 
    />
  );
}