
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './copyright-bold-circle.module.scss';

export type CopyrightCircleBoldIconProps = Omit<IconProps, 'icon'>;

export function CopyrightCircleBoldIcon({ className, ...rest }: CopyrightCircleBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Copyright (ตัวอย่าง: solar:copyright-bold หรือ mingcute:copyright-fill)
      icon="solar:copyright-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.copyrightCircleBoldIcon, className)} 
      {...rest} 
    />
  );
}