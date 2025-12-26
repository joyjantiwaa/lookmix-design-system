import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './short-bold.module.scss';

export type ShortBoldIconProps = Omit<IconProps, 'icon'>;

export function ShortBoldIcon({ className, ...rest }: ShortBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อจาก Icon Park (solid style)
      icon="icon-park-solid:clothes-pants-short" 
      className={classNames(styles.shortBoldIcon, className)} 
      {...rest} 
    />
  );
}