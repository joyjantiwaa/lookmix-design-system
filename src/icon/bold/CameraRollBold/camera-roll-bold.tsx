import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './camera-roll-bold.module.scss';

export type CameraRollBoldIconProps = Omit<IconProps, 'icon'>;

export function CameraRollBoldIcon({ className, ...rest }: CameraRollBoldIconProps) {
  return (
    <Icon 
      icon="solar:gallery-wide-bold" 
      className={classNames(styles.cameraRollBoldIcon, className)} 
      {...rest} 
    />
  );
}