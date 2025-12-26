
import { Icon, type IconProps } from '../../icon'; // ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './bell-bold.module.scss';

export type BellBoldIconProps = Omit<IconProps, 'icon'>;

export function BellBoldIcon({ className, ...rest }: BellBoldIconProps) {
  return (
    <Icon 
      // ใส่รหัสไอคอนกระดิ่ง (ตัวอย่าง: solar:bell-bing-bold)
      icon="solar:bell-bing-bold" 
      // ผสม class เพื่อให้ยังทำงานร่วมกับไฟล์ .scss เฉพาะตัวได้ถ้าจำเป็น
      className={classNames(styles.bellBoldIcon, className)} 
      {...rest} 
    />
  );
}