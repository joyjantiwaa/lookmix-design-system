import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './purse-bold.module.scss';

export type PurseBoldIconProps = Omit<IconProps, 'icon'>;

export function PurseBoldIcon({ className, ...rest }: PurseBoldIconProps) {
  return (
    <Icon 
      // ไอคอน MDI แบบทึบ (เติมคำว่า purse เฉยๆ)
      icon="mdi:purse" 
      className={classNames(styles.purseBoldIcon, className)} 
      {...rest} 
    />
  );
}