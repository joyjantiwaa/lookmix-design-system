
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './like-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type LikeBoldIconProps = Omit<IconProps, 'icon'>;

export function LikeBoldIcon({ className, ...rest }: LikeBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Like (ตัวอย่าง: solar:like-bold หรือ mingcute:thumb-up-fill)
      icon="solar:like-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.likeBoldIcon, className)} 
      {...rest} 
    />
  );
}