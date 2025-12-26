
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './undo-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type UndoLinearIconProps = Omit<IconProps, 'icon'>;

export function UndoLinearIcon({ className, ...rest }: UndoLinearIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Undo (ตัวอย่าง: solar:undo-left-round-linear)
      icon="solar:undo-left-round-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.undoLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default UndoLinearIcon;