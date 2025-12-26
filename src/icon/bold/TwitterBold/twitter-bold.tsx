import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './twitter-bold.module.scss';

export type TwitterBoldIconProps = Omit<IconProps, 'icon'>;

export function TwitterBoldIcon({ className, ...rest }: TwitterBoldIconProps) {
  return (
    <Icon 
      // ดึงจาก Zendesk Garden collection (โลโก้ X)
      icon="garden:twitter-fill-12" 
      className={classNames(styles.twitterBoldIcon, className)} 
      {...rest} 
    />
  );
}