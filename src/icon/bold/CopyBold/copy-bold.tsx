
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './copy-bold.module.scss';

export type CopyBoldIconProps = Omit<IconProps, 'icon'>;

export function CopyBoldIcon({ className, ...rest }: CopyBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน (ตัวอย่าง: solar:copy-bold หรือ mingcute:copy-2-fill)
      icon="solar:copy-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัว (ถ้ามี)
      className={classNames(styles.copyBoldIcon, className)} 
      {...rest} 
    />
  );
}