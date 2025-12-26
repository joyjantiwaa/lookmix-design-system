import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './outfit-linear.module.scss';

export type OutfitLinearIconProps = Omit<IconProps, 'icon'>;

export function OutfitLinearIcon({ className, ...rest }: OutfitLinearIconProps) {
  return (
    <Icon 
      icon="solar:t-shirt-linear" 
      className={classNames(styles.outfitLinearIcon, className)} 
      {...rest} 
    />
  );
}