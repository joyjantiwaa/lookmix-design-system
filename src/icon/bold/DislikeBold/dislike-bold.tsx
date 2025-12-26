
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './dislike-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราจะระบุเอง)
export type DislikeBoldIconProps = Omit<IconProps, 'icon'>;

export function DislikeBoldIcon({ className, ...rest }: DislikeBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Dislike (ตัวอย่าง: solar:dislike-bold หรือ mingcute:thumb-down-fill)
      icon="solar:dislike-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.dislikeBoldIcon, className)} 
      {...rest} 
    />
  );
}