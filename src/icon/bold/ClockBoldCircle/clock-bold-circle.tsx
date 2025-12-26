
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './clock-bold-circle.module.scss';


export type ClockCircleBoldIconProps = Omit<IconProps, 'icon'>;

export function ClockCircleBoldIcon({ className, ...rest }: ClockCircleBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอนนาฬิกา (ตัวอย่าง: solar:clock-circle-bold หรือ mingcute:time-fill)
      icon="solar:clock-circle-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.clockCircleBoldIcon, className)} 
      {...rest} 
    />
  );
}