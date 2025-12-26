
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './mute-mic-linear.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type MuteMicLinearIconProps = Omit<IconProps, 'icon'>;

export function MuteMicLinearIcon({ className, ...rest }: MuteMicLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนเป็นรหัสไอคอน Bootstrap (bi:mic-mute)
      icon="bi:mic-mute" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.muteMicLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default MuteMicLinearIcon;