
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './check-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type CheckLinearCircleIconProps = Omit<IconProps, 'icon'>;

export function CheckLinearCircleIcon({ className, ...rest }: CheckLinearCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Check Circle (ตัวอย่าง: solar:check-circle-linear)
      icon="solar:check-circle-linear" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.checkLinearCircleIcon, className)} 
      {...rest} 
    />
  );
}