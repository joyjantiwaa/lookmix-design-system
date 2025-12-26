
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './earphones-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก IconProps ยกเว้น icon ที่เราจะล็อคค่าเอง
export type EarphonesBoldIconProps = Omit<IconProps, 'icon'>;

export function EarphonesBoldIcon({ className, ...rest }: EarphonesBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Earphones (ตัวอย่าง: solar:headphones-round-bold)
      icon="solar:headphones-round-bold" 
      // 4. ผสม class เพื่อให้ยังใช้งาน CSS เฉพาะตัวใน .module.scss ได้
      className={classNames(styles.earphonesBoldIcon, className)} 
      {...rest} 
    />
  );
}