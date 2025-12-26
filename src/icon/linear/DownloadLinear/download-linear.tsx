import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './download-linear.module.scss';

export type DownloadLinearIconProps = Omit<IconProps, 'icon'>;

export function DownloadLinearIcon({ className, ...rest }: DownloadLinearIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Material Symbols (rounded)
      icon="material-symbols:download-rounded" 
      className={classNames(styles.downloadLinearIcon, className)} 
      {...rest} 
    />
  );
}