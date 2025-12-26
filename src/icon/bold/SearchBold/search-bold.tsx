
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './search-bold.module.scss';

// 2.ใช้ Omit เพื่อรับ Props ทุกอย่างจาก Icon หลักมาใช้ (ยกเว้น icon ที่เราระบุเอง)
export type SearchBoldIconProps = Omit<IconProps, 'icon'>;

export function SearchBoldIcon({ className, ...rest }: SearchBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Search (ตัวอย่าง: solar:magnifer-bold)
      icon="solar:magnifer-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.searchBoldIcon, className)} 
      {...rest} 
    />
  );
}