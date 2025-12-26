
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './mic-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราจะระบุเอง)
export type MicBoldIconProps = Omit<IconProps, 'icon'>;

export function MicBoldIcon({ className, ...rest }: MicBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Microphone (ตัวอย่าง: solar:microphone-bold หรือ mingcute:mic-fill)
      icon="solar:microphone-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.micBoldIcon, className)} 
      {...rest} 
    />
  );
}