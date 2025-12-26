import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './high-heel-linear.module.scss';

export type HighHeelsLinearIconProps = Omit<IconProps, 'icon'>;

export function HighHeelsLinearIcon({ className, ...rest }: HighHeelsLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Mingcute (shoe-2-line)
      icon="mingcute:shoe-2-line" 
      className={classNames(styles.highheelsLinearIcon, className)} 
      {...rest} 
    />
  );
}