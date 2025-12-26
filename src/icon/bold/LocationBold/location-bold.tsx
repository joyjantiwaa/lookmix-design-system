
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './location-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราจะระบุเอง)
export type LocationBoldIconProps = Omit<IconProps, 'icon'>;

export function LocationBoldIcon({ className, ...rest }: LocationBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Location (ตัวอย่าง: solar:map-point-bold หรือ mingcute:location-fill)
      icon="solar:map-point-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.locationBoldIcon, className)} 
      {...rest} 
    />
  );
}