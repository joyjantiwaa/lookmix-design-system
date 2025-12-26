
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './youtube-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type YoutubeLinearIconProps = Omit<IconProps, 'icon'>;

export function YoutubeLinearIcon({ className, ...rest }: YoutubeLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน YouTube (ตัวอย่าง: solar:videocamera-record-linear หรือ logos:youtube-icon)
      icon="solar:videocamera-record-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.youtubeLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default YoutubeLinearIcon;