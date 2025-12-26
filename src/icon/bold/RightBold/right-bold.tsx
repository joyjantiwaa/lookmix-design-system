
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './right-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type RightBoldIconProps = Omit<IconProps, 'icon'>;

export function RightBoldIcon({ className, ...rest }: RightBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Arrow Right (ตัวอย่าง: solar:alt-arrow-right-bold)
      icon="solar:alt-arrow-right-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.rightBoldIcon, className)} 
      {...rest} 
    />
  );
}