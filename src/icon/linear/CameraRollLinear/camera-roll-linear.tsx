import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './camera-roll-linear.module.scss';

export type CameraRollLinearIconProps = Omit<IconProps, 'icon'>;

export function CameraRollLinearIcon({ className, ...rest }: CameraRollLinearIconProps) {
  return (
    <Icon 
      icon="solar:gallery-wide-linear" 
      className={classNames(styles.cameraRollLinearIcon, className)} 
      {...rest} 
    />
  );
}