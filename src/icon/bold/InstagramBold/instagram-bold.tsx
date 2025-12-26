import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './instagram-bold.module.scss';

export type InstagramBoldIconProps = Omit<IconProps, 'icon'>;

export function InstagramBoldIcon({ className, ...rest }: InstagramBoldIconProps) {
  return (
    <Icon 
      // ใช้ชื่อไอคอนจาก Remix Icon ตามที่พี่เลือกมา
      icon="ri:instagram-fill" 
      className={classNames(styles.instagramBoldIcon, className)} 
      {...rest} 
    />
  );
}