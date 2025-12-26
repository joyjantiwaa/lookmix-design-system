import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './jacket-bold.module.scss';

export type JacketBoldIconProps = Omit<IconProps, 'icon'>;

export function JacketBoldIcon({ className, ...rest }: JacketBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (coat-fill)
      icon="mingcute:coat-fill" 
      className={classNames(styles.jacketBoldIcon, className)} 
      {...rest} 
    />
  );
}