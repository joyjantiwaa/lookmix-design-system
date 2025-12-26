import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './skirt-linear.module.scss';

export type SkirtLinearIconProps = Omit<IconProps, 'icon'>;

export function SkirtLinearIcon({ className, ...rest }: SkirtLinearIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Solar Icons (Linear style)
      icon="solar:skirt-linear" 
      className={classNames(styles.skirtLinearIcon, className)} 
      {...rest} 
    />
  );
}