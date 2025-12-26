import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './purse-linear.module.scss';

export type PurseLinearIconProps = Omit<IconProps, 'icon'>;

export function PurseLinearIcon({ className, ...rest }: PurseLinearIconProps) {
  return (
    <Icon 
      // ชื่อไอคอนจาก Material Design Icons (mdi)
      icon="mdi:purse-outline" 
      className={classNames(styles.purseLinearIcon, className)} 
      {...rest} 
    />
  );
}