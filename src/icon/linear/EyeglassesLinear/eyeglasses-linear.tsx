import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './eyeglasses-linear.module.scss';

export type EyeglassesLinearIconProps = Omit<IconProps, 'icon'>;

export function EyeglassesLinearIcon({ className, ...rest }: EyeglassesLinearIconProps) {
  return (
    <Icon 
      // ในระบบ Iconify สไตล์ Light ของ Phosphor คือ "ph:eyeglasses-light"
      icon="ph:eyeglasses-light" 
      className={classNames(styles.eyeglassesLinearIcon, className)} 
      {...rest} 
    />
  );
}