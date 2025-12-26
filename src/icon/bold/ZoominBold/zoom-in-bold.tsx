import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './zoom-in-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type ZoomInBoldIconProps = Omit<IconProps, 'icon'>;

export function ZoomInBoldIcon({ className, ...rest }: ZoomInBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Zoom In (ตัวอย่าง: solar:magnifer-zoom-in-bold)
      icon="solar:magnifer-zoom-in-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.zoomInBoldIcon, className)} 
      {...rest} 
    />
  );
}