
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './zoom-out-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type ZoomOutBoldIconProps = Omit<IconProps, 'icon'>;

export function ZoomOutBoldIcon({ className, ...rest }: ZoomOutBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Zoom Out (ตัวอย่าง: solar:magnifer-zoom-out-bold)
      icon="solar:magnifer-zoom-out-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.zoomOutBoldIcon, className)} 
      {...rest} 
    />
  );
}