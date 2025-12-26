
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './edit-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type EditLinearIconProps = Omit<IconProps, 'icon'>;

export function EditLinearIcon({ className, ...rest }: EditLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Edit/Pen (ตัวอย่าง: solar:pen-new-square-linear)
      icon="solar:pen-new-square-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.editLinearIcon, className)} 
      {...rest} 
    />
  );
}