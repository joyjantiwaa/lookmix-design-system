import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './top-linear.module.scss';

export type TopLinearIconProps = Omit<IconProps, 'icon'>;

export function TopLinearIcon({ className, ...rest }: TopLinearIconProps) {
  return (
    <Icon 
      icon="solar:t-shirt-linear" 
      className={classNames(styles.topLinearIcon, className)} 
      {...rest} 
    />
  );
}