
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './star-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type StarBoldIconProps = Omit<IconProps, 'icon'>;

export function StarBoldIcon({ className, ...rest }: StarBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Star (ตัวอย่าง: solar:star-bold)
      icon="solar:star-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.starBoldIcon, className)} 
      {...rest} 
    />
  );
}