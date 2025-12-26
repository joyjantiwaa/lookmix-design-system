import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './save-bold.module.scss';

export type SaveBoldIconProps = Omit<IconProps, 'icon'>;

export function SaveBoldIcon({ className, ...rest }: SaveBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อจาก Material Symbols (Rounded) สไตล์ Fill/Bold
      icon="material-symbols:save-rounded" 
      className={classNames(styles.saveBoldIcon, className)} 
      {...rest} 
    />
  );
}