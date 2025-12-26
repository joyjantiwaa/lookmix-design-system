
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './zoom-in-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ZoomInLinearIconProps = Omit<IconProps, 'icon'>;

export function ZoomInLinearIcon({ className, ...rest }: ZoomInLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Zoom In (ตัวอย่าง: solar:magnifer-zoom-in-linear)
      icon="solar:magnifer-zoom-in-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.zoomInLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default ZoomInLinearIcon;