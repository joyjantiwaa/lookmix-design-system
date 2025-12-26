
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './fullscreen-linear.module.scss';

export type FullscreenLinearIconProps = Omit<IconProps, 'icon'>;

export function FullscreenLinearIcon({ className, ...rest }: FullscreenLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Dashicons (dashicons:fullscreen-alt)
      icon="dashicons:fullscreen-alt" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.fullscreenLinearIcon, className)} 
      {...rest} 
    />
  );
}