import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './sneakers-linear.module.scss';

export type SneakersLinearIconProps = Omit<IconProps, 'icon'>;

export function SneakersLinearIcon({ className, ...rest }: SneakersLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (shoe-line)
      icon="mingcute:shoe-line" 
      className={classNames(styles.sneakersLinearIcon, className)} 
      {...rest} 
    />
  );
}