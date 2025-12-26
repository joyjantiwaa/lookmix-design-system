import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './jacket-linear.module.scss';

export type JacketLinearIconProps = Omit<IconProps, 'icon'>;

export function JacketLinearIcon({ className, ...rest }: JacketLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (coat-line)
      icon="mingcute:coat-line" 
      className={classNames(styles.jacketLinearIcon, className)} 
      {...rest} 
    />
  );
}