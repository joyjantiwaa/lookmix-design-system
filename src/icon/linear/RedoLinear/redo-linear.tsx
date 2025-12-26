
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './redo-linear.module.scss';

export type RedoLinearIconProps = Omit<IconProps, 'icon'>;

export function RedoLinearIcon({ className, ...rest }: RedoLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Material Symbols (material-symbols:redo-rounded)
      icon="material-symbols:redo-rounded" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.redoLinearIcon, className)} 
      {...rest} 
    />
  );
}

export default RedoLinearIcon;