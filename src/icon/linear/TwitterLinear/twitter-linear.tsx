import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './twitter-linear.module.scss';

export type TwitterLinearIconProps = Omit<IconProps, 'icon'>;

export function TwitterLinearIcon({ className, ...rest }: TwitterLinearIconProps) {
  return (
    <Icon 
      icon="fa6-brands:x-twitter" 
      className={classNames(styles.twitterLinearIcon, className)} 
      {...rest} 
    />
  );
}