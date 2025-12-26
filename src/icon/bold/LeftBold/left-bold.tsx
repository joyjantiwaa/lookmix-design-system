import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './left-bold.module.scss';

export type LeftBoldIconProps = Omit<IconProps, 'icon'>;

export function BackArrowBoldIcon({ className, ...rest }: LeftBoldIconProps) {
  return (
    <Icon 
      icon="solar:alt-arrow-left-bold" 
      className={classNames(styles.backArrowBoldIcon, className)} 
      {...rest} 
    />
  );
}