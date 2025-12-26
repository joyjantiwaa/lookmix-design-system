
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './trash-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type TrashBoldIconProps = Omit<IconProps, 'icon'>;

export function TrashBoldIcon({ className, ...rest }: TrashBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Trash (ตัวอย่าง: solar:trash-bin-trash-bold)
      icon="solar:trash-bin-trash-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.trashBoldIcon, className)} 
      {...rest} 
    />
  );
}