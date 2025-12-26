
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './link-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type LinkLinearIconProps = Omit<IconProps, 'icon'>;

export function LinkLinearIcon({ className, ...rest }: LinkLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Link (ตัวอย่าง: solar:link-linear)
      icon="solar:link-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.linkLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default LinkLinearIcon;