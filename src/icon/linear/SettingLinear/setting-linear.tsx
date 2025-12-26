
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './setting-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type SettingLinearIconProps = Omit<IconProps, 'icon'>;

export function SettingLinearIcon({ className, ...rest }: SettingLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Settings (ตัวอย่าง: solar:settings-linear)
      icon="solar:settings-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.settingLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default SettingLinearIcon;