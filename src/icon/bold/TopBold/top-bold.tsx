import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './top-bold.module.scss';

export type TopBoldIconProps = Omit<IconProps, 'icon'>;

export function TopBoldIcon({ className, ...rest }: TopBoldIconProps) {
  return (
    <Icon 
      icon="solar:t-shirt-bold" 
      className={classNames(styles.topBoldIcon, className)} 
      {...rest} 
    />
  );
}