
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './youtube-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type YoutubeBoldIconProps = Omit<IconProps, 'icon'>;

export function YoutubeBoldIcon({ className, ...rest }: YoutubeBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน YouTube (ตัวอย่าง: solar:videocamera-record-bold หรือ mingcute:youtube-fill)
      icon="solar:videocamera-record-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.youtubeBoldIcon, className)} 
      {...rest} 
    />
  );
}