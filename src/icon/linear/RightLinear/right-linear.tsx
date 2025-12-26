
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './right-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type RightLinearIconProps = Omit<IconProps, 'icon'>;

export function RightLinearIcon({ className, ...rest }: RightLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Arrow Right (ตัวอย่าง: solar:alt-arrow-right-linear)
      icon="solar:alt-arrow-right-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.rightLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default RightLinearIcon;