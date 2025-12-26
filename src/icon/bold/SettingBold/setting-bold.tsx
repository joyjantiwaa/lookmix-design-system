
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './setting-bold.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type SettingBoldIconProps = Omit<IconProps, 'icon'>;

export function SettingBoldIcon({ className, ...rest }: SettingBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Setting (ตัวอย่าง: solar:settings-bold)
      icon="solar:settings-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.settingBoldIcon, className)} 
      {...rest} 
    />
  );
}