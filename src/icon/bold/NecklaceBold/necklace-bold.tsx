import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './necklace-bold.module.scss';

export type NecklaceBoldIconProps = Omit<IconProps, 'icon'>;

export function NecklaceBoldIcon({ className, ...rest }: NecklaceBoldIconProps) {
  return (
    <Icon 
      // ดึงไอคอนจากค่าย Icon Park (solid)
      icon="icon-park-solid:diamond-necklace" 
      className={classNames(styles.necklaceBoldIcon, className)} 
      {...rest} 
    />
  );
}