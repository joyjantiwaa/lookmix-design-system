
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './warning-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type WarningLinearIconProps = Omit<IconProps, 'icon'>;

export function WarningLinearIcon({ className, ...rest }: WarningLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Warning (ตัวอย่าง: solar:danger-triangle-linear หรือ solar:info-circle-linear)
      icon="solar:danger-triangle-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.warningLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default WarningLinearIcon;