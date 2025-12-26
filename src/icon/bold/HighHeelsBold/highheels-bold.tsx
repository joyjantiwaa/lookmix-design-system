import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './highheels-bold.module.scss';

export type HighHeelsBoldIconProps = Omit<IconProps, 'icon'>;

export function HighHeelsBoldIcon({ className, ...rest }: HighHeelsBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (shoe-2-fill)
      icon="mingcute:shoe-2-fill" 
      className={classNames(styles.highheelsBoldIcon, className)} 
      {...rest} 
    />
  );
}