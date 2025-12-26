
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './search-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type SearchLinearIconProps = Omit<IconProps, 'icon'>;

export function SearchLinearIcon({ className, ...rest }: SearchLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Search (ตัวอย่าง: solar:magnifer-linear)
      icon="solar:magnifer-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.searchLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default SearchLinearIcon;