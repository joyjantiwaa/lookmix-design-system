
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './up-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type UpLinearIconProps = Omit<IconProps, 'icon'>;

export function UpLinearIcon({ className, ...rest }: UpLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Arrow Up (ตัวอย่าง: solar:alt-arrow-up-linear)
      icon="solar:alt-arrow-up-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.upLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default UpLinearIcon;