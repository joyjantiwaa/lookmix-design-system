import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './short-linear.module.scss';

export type ShortLinearIconProps = Omit<IconProps, 'icon'>;

export function ShortLinearIcon({ className, ...rest }: ShortLinearIconProps) {
  return (
    <Icon 
      // ดึงไอคอนจากค่าย Icon Park (Outline Style)
      icon="icon-park-outline:clothes-pants-short" 
      className={classNames(styles.shortLinearIcon, className)} 
      {...rest} 
    />
  );
}