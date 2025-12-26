
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './heart-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่ระบุเอง)
export type HeartBoldIconProps = Omit<IconProps, 'icon'>;

export function HeartBoldIcon({ className, ...rest }: HeartBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Heart (ตัวอย่าง: solar:heart-bold หรือ mingcute:heart-fill)
      icon="solar:heart-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัว (เช่น กรณีพี่อยากให้หัวใจเป็นสีแดงเสมอ)
      className={classNames(styles.heartBoldIcon, className)} 
      {...rest} 
    />
  );
}