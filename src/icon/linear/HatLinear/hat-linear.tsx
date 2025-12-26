import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './hat-linear.module.scss';

export type HatLinearIconProps = Omit<IconProps, 'icon'>;

export function HatLinearIcon({ className, ...rest }: HatLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (hat-2-line)
      icon="mingcute:hat-2-line" 
      className={classNames(styles.hatLinearIcon, className)} 
      {...rest} 
    />
  );
}