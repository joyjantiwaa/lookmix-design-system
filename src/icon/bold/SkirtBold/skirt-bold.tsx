import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './skirt-bold.module.scss';

export type SkirtBoldIconProps = Omit<IconProps, 'icon'>;

export function SkirtBoldIcon({ className, ...rest }: SkirtBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Solar Icons (Bold/Bold Duotone style)
      icon="solar:skirt-bold" 
      className={classNames(styles.skirtBoldIcon, className)} 
      {...rest} 
    />
  );
}