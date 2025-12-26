
import { Icon, type IconProps } from '../../icon'; // 1. Import Master Icon มาใช้
import classNames from 'classnames';
import styles from './apple-bold.module.scss';

export type AppleBoldIconProps = Omit<IconProps, 'icon'>;

export function AppleBoldIcon({ className, ...rest }: AppleBoldIconProps) {
  return (
    <Icon 
      // 3. ระบุชื่อไอคอนจาก Iconify หรือ Library ที่พี่ใช้
      icon="mingcute:apple-fill" 
      // 4. ผสม Class เดิม (เผื่อมี CSS พิเศษใน scss) กับ Class จากระบบ
      className={classNames(styles.appleBoldIcon, className)} 
      {...rest} 
    />
  );
}