import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './save-linear.module.scss';

export type SaveLinearIconProps = Omit<IconProps, 'icon'>;

export function SaveLinearIcon({ className, ...rest }: SaveLinearIconProps) {
  return (
    <Icon 
      // ใช้ชื่อจาก Material Symbols (Rounded) สไตล์ Outline
      icon="material-symbols:save-outline-rounded" 
      className={classNames(styles.saveLinearIcon, className)} 
      {...rest} 
    />
  );
}