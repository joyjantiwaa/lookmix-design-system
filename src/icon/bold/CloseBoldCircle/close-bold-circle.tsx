
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './close-bold-circle.module.scss';

export type CloseBoldCircleIconProps = Omit<IconProps, 'icon'>;

export function CloseBoldCircleIcon({ className, ...rest }: CloseBoldCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน (ตัวอย่าง: solar:close-circle-bold หรือ mingcute:close-circle-fill)
      icon="solar:close-circle-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัว (ถ้ามี)
      className={classNames(styles.closeBoldCircleIcon, className)} 
      {...rest} 
    />
  );
}