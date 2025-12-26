import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './sneakers-bold.module.scss';

export type SneakersBoldIconProps = Omit<IconProps, 'icon'>;

export function SneakersBoldIcon({ className, ...rest }: SneakersBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (shoe-fill)
      icon="mingcute:shoe-fill" 
      className={classNames(styles.sneakersBoldIcon, className)} 
      {...rest} 
    />
  );
}