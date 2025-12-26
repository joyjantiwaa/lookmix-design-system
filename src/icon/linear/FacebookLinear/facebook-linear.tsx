import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './facebook-linear.module.scss';

export type FacebookLinearIconProps = Omit<IconProps, 'icon'>;

export function FacebookLinearIcon({
  className,
  ...rest
}: FacebookLinearIconProps) {
  return (
    <Icon
      icon="mingcute:facebook-line"
      className={classNames(styles.facebookLinearIcon, className)}
      {...rest}
    />
  );
}
