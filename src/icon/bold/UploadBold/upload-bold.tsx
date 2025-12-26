
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './upload-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type UploadBoldIconProps = Omit<IconProps, 'icon'>;

export function UploadBoldIcon({ className, ...rest }: UploadBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Upload (ตัวอย่าง: solar:upload-bold)
      icon="solar:upload-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.uploadBoldIcon, className)} 
      {...rest} 
    />
  );
}