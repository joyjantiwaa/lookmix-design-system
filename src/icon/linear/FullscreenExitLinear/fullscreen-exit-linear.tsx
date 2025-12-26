
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './fullscreen-exit-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type FullscreenExitLinearIconProps = Omit<IconProps, 'icon'>;

export function FullscreenExitLinearIcon({ className, ...rest }: FullscreenExitLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนเป็นรหัสไอคอน TDesign (tdesign:fullscreen-exit)
      icon="tdesign:fullscreen-exit" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.fullscreenExitLinearIcon, className)} 
      {...rest} 
    />
  );
}