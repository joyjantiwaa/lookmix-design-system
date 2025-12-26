
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './chat-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type ChatLinearIconProps = Omit<IconProps, 'icon'>;

export function ChatLinearIcon({ className, ...rest }: ChatLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Chat (ตัวอย่าง: solar:chat-line-linear)
      icon="solar:chat-line-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.chatLinearIcon, className)} 
      {...rest} 
    />
  );
}