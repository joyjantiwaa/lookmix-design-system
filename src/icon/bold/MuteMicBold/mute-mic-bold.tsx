
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './mute-mic-bold.module.scss';

export type MuteMicBoldIconProps = Omit<IconProps, 'icon'>;

export function MuteMicBoldIcon({ className, ...rest }: MuteMicBoldIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Bootstrap Icons (bi)
      icon="bi:mic-mute-fill" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.muteMicBoldIcon, className)} 
      {...rest} 
    />
  );
}