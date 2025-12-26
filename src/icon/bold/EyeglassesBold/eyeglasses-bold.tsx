import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './eyeglasses-bold.module.scss';

export type EyeglassesBoldIconProps = Omit<IconProps, 'icon'>;

export function EyeglassesBoldIcon({ className, ...rest }: EyeglassesBoldIconProps) {
  return (
    <Icon 
      // ดึงจาก Phosphor (eyeglasses-fill)
      icon="ph:eyeglasses-fill" 
      className={classNames(styles.eyeglassesBoldIcon, className)} 
      {...rest} 
    />
  );
}