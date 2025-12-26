
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './up-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type UpLinearCircleIconProps = Omit<IconProps, 'icon'>;

export function UpLinearCircleIcon({ className, ...rest }: UpLinearCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Arrow Up Circle (ตัวอย่าง: solar:alt-arrow-up-circle-linear)
      icon="solar:alt-arrow-up-circle-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.upLinearCircleIcon, className)} 
      {...rest} 
    />
  );
}

export default UpLinearCircleIcon;