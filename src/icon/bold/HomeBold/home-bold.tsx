
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './home-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก IconProps ยกเว้น icon ที่เราจะล็อคค่าเอง
export type HomeBoldIconProps = Omit<IconProps, 'icon'>;

export function HomeBoldIcon({ className, ...rest }: HomeBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Home (ตัวอย่าง: solar:home-smile-bold หรือ mingcute:home-6-fill)
      icon="solar:home-smile-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.homeBoldIcon, className)} 
      {...rest} 
    />
  );
}