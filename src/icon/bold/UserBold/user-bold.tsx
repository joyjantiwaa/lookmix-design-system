
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './user-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type UserBoldIconProps = Omit<IconProps, 'icon'>;

export function UserBoldIcon({ className, ...rest }: UserBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน User (ตัวอย่าง: solar:user-bold หรือ mingcute:user-4-fill)
      icon="solar:user-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.userBoldIcon, className)} 
      {...rest} 
    />
  );
}