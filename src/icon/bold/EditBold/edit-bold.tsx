
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './edit-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราจะระบุเอง)
export type EditBoldIconProps = Omit<IconProps, 'icon'>;

export function EditBoldIcon({ className, ...rest }: EditBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Edit (ตัวอย่าง: solar:pen-new-square-bold หรือ mingcute:edit-2-fill)
      icon="solar:pen-new-square-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.editBoldIcon, className)} 
      {...rest} 
    />
  );
}