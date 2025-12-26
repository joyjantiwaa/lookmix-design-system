
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './location-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type LocationLinearIconProps = Omit<IconProps, 'icon'>;

export function LocationLinearIcon({ className, ...rest }: LocationLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Location (ตัวอย่าง: solar:map-point-linear)
      icon="solar:map-point-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.locationLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default LocationLinearIcon;