
import { Icon, type IconProps } from '../../icon'; // ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './check-bold-circle.module.scss';

export type CheckBoldCircleIconProps = Omit<IconProps, 'icon'>;

export function CheckBoldCircleIcon({ className, ...rest }: CheckBoldCircleIconProps) {
  return (
    <Icon 
      // ใส่รหัสไอคอน (ตัวอย่าง: solar:check-circle-bold หรือ mingcute:check-circle-fill)
      icon="solar:check-circle-bold" 
      // ผสม class เพื่อให้ยังทำงานร่วมกับไฟล์ .scss เฉพาะตัวได้
      className={classNames(styles.checkBoldCircleIcon, className)} 
      {...rest} 
    />
  );
}