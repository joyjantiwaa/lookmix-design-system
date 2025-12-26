import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './instagram-linear.module.scss';

export type InstagramLinearIconProps = Omit<IconProps, 'icon'>;

export function InstagramLinearIcon({ className, ...rest }: InstagramLinearIconProps) {
  return (
    <Icon 
      icon="fa6-brands:instagram" 
      className={classNames(styles.instagramLinearIcon, className)} 
      {...rest} 
    />
  );
}