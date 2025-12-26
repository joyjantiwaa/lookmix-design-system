
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './mic-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type MicLinearIconProps = Omit<IconProps, 'icon'>;

export function MicLinearIcon({ className, ...rest }: MicLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Microphone (ตัวอย่าง: solar:microphone-linear)
      icon="solar:microphone-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.micLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default MicLinearIcon;