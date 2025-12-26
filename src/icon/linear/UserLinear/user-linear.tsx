
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './user-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type UserLinearIconProps = Omit<IconProps, 'icon'>;

export function UserLinearIcon({ className, ...rest }: UserLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน User (ตัวอย่าง: solar:user-linear)
      icon="solar:user-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.userLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default UserLinearIcon;