import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './google-play-linear.module.scss';

export type GooglePlayLinearIconProps = Omit<IconProps, 'icon'>;

export function GooglePlayLinearIcon({ className, ...rest }: GooglePlayLinearIconProps) {
  return (
    <Icon 
      // ดึงจาก Unicons (uil)
      icon="uil:google-play" 
      className={classNames(styles.googlePlayLinearIcon, className)} 
      {...rest} 
    />
  );
}