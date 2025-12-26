
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './trash-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type TrashLinearIconProps = Omit<IconProps, 'icon'>;

export function TrashLinearIcon({ className, ...rest }: TrashLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Trash (ตัวอย่าง: solar:trash-bin-trash-linear)
      icon="solar:trash-bin-trash-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.trashLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default TrashLinearIcon;