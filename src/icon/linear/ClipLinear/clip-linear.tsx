
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './clip-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ClipLinearIconProps = Omit<IconProps, 'icon'>;

export function ClipLinearIcon({ className, ...rest }: ClipLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Clip/Attachment (ตัวอย่าง: solar:paperclip-linear)
      icon="solar:paperclip-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.clipLinearIcon, className)} 
      {...rest} 
    />
  );
}