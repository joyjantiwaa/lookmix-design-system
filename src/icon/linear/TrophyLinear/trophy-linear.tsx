
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './trophy-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type TrophyLinearIconProps = Omit<IconProps, 'icon'>;

export function TrophyLinearIcon({ className, ...rest }: TrophyLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Trophy (ตัวอย่าง: solar:cup-star-linear)
      icon="solar:cup-star-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.trophyLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default TrophyLinearIcon;