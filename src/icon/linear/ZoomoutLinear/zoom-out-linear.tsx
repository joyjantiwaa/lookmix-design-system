
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './zoom-out-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ZoomOutLinearIconProps = Omit<IconProps, 'icon'>;

export function ZoomOutLinearIcon({ className, ...rest }: ZoomOutLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Zoom Out (ตัวอย่าง: solar:magnifer-zoom-out-linear)
      icon="solar:magnifer-zoom-out-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.zoomOutLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default ZoomOutLinearIcon;