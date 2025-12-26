import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './necklace-linear.module.scss';

export type NecklaceLinearIconProps = Omit<IconProps, 'icon'>;

export function NecklaceLinearIcon({ className, ...rest }: NecklaceLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Icon Park (outline)
      icon="icon-park-outline:diamond-necklace" 
      className={classNames(styles.necklaceLinearIcon, className)} 
      {...rest} 
    />
  );
}