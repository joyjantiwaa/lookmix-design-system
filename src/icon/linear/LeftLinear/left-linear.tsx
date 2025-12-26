import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './left-linear.module.scss';

export type LeftLinearIconProps = Omit<IconProps, 'icon'>;

export function BackArrowLinearIcon({ className, ...rest }: LeftLinearIconProps) {
  return (
    <Icon 
      icon="solar:alt-arrow-left-linear" 
      className={classNames(styles.backArrowLinearIcon, className)} 
      {...rest} 
    />
  );
}