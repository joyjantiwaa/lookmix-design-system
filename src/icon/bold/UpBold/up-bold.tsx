
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './up-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type UpBoldIconProps = Omit<IconProps, 'icon'>;

export function UpBoldIcon({ className, ...rest }: UpBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Arrow Up (ตัวอย่าง: solar:alt-arrow-up-bold)
      icon="solar:alt-arrow-up-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.upBoldIcon, className)} 
      {...rest} 
    />
  );
}