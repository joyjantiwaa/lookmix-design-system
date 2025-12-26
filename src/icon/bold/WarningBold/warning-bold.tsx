
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './warning-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type WarningBoldIconProps = Omit<IconProps, 'icon'>;

export function WarningBoldIcon({ className, ...rest }: WarningBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Warning (ตัวอย่าง: solar:danger-bold หรือ solar:exclamation-triangle-bold)
      icon="solar:danger-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.warningBoldIcon, className)} 
      {...rest} 
    />
  );
}