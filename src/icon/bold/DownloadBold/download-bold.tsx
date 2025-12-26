import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './download-bold.module.scss';

export type DownloadBoldIconProps = Omit<IconProps, 'icon'>;

export function DownloadBoldIcon({ className, ...rest }: DownloadBoldIconProps) {
  return (
    <Icon 
      // ดึงจาก Line MD (Animated Icon)
      icon="line-md:download" 
      className={classNames(styles.downloadBoldIcon, className)} 
      {...rest} 
    />
  );
}