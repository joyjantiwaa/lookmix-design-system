import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './google-play-bold.module.scss';

export type GooglePlayBoldIconProps = Omit<IconProps, 'icon'>;

export function GooglePlayBoldIcon({ className, ...rest }: GooglePlayBoldIconProps) {
  return (
    <Icon 
      icon="fa6-brands:google-play" 
      className={classNames(styles.googlePlayBoldIcon, className)} 
      {...rest} 
    />
  );
}