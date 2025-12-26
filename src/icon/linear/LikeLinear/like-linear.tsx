
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './like-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type LikeLinearIconProps = Omit<IconProps, 'icon'>;

export function LikeLinearIcon({ className, ...rest }: LikeLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Like/Thumb Up (ตัวอย่าง: solar:like-linear)
      icon="solar:like-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.likeLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default LikeLinearIcon;