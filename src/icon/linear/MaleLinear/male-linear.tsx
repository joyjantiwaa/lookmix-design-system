
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './male-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type MaleLinearIconProps = Omit<IconProps, 'icon'>;

export function MaleLinearIcon({ className, ...rest }: MaleLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Material Symbols (google:material-symbols:male-rounded)
      // หรือในระบบ Iconify ส่วนใหญ่จะใช้สั้นๆ ว่า material-symbols:male-rounded
      icon="material-symbols:male-rounded" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.maleLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default MaleLinearIcon;