
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './upload-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type UploadLinearIconProps = Omit<IconProps, 'icon'>;

export function UploadLinearIcon({ className, ...rest }: UploadLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Upload (ตัวอย่าง: solar:upload-linear)
      icon="solar:upload-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.uploadLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default UploadLinearIcon;