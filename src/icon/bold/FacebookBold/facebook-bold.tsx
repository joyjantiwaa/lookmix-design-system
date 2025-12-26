import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './facebook-bold.module.scss';

export type FacebookBoldIconProps = Omit<IconProps, 'icon'>;

export function FacebookBoldIcon({ className, ...rest }: FacebookBoldIconProps) {
  return (
    <Icon 
      icon="fa6-brands:facebook" 
      className={classNames(styles.facebookBoldIcon, className)} 
      {...rest} 
    />
  );
}