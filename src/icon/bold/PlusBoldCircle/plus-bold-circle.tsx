
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './plus-bold-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type PlusBoldCircleIconProps = Omit<IconProps, 'icon'>;

export function PlusBoldCircleIcon({ className, ...rest }: PlusBoldCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Plus Circle (ตัวอย่าง: solar:add-circle-bold หรือ mingcute:add-circle-fill)
      icon="solar:add-circle-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.plusBoldCircleIcon, className)} 
      {...rest} 
    />
  );
}