
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './home-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type HomeLinearIconProps = Omit<IconProps, 'icon'>;

export function HomeLinearIcon({ className, ...rest }: HomeLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Home (ตัวอย่าง: solar:home-2-linear)
      icon="solar:home-2-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.homeLinearIcon, className)} 
      {...rest} 
    />
  );
}