
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './star-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type StarLinearIconProps = Omit<IconProps, 'icon'>;

export function StarLinearIcon({ className, ...rest }: StarLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Star (ตัวอย่าง: solar:star-linear)
      icon="solar:star-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.starLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default StarLinearIcon;