
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './trophy-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type TrophyBoldIconProps = Omit<IconProps, 'icon'>;

export function TrophyBoldIcon({ className, ...rest }: TrophyBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Trophy (ตัวอย่าง: solar:cup-first-bold หรือ mingcute:trophy-fill)
      icon="solar:cup-first-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.trophyBoldIcon, className)} 
      {...rest} 
    />
  );
}