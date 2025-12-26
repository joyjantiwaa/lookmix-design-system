import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './hat-bold.module.scss';

export type HatBoldIconProps = Omit<IconProps, 'icon'>;

export function HatBoldIcon({ className, ...rest }: HatBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (hat-2-fill)
      icon="mingcute:hat-2-fill" 
      className={classNames(styles.hatBoldIcon, className)} 
      {...rest} 
    />
  );
}