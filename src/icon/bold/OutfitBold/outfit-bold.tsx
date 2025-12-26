import { Icon, type IconProps } from '../../icon';
import classNames from 'classnames';
import styles from './outfit-bold.module.scss';

export type OutfitBoldIconProps = Omit<IconProps, 'icon'>;

export function OutfitBoldIcon({ className, ...rest }: OutfitBoldIconProps) {
  return (
    <Icon 
      icon="solar:t-shirt-bold" 
      className={classNames(styles.outfitBoldIcon, className)} 
      {...rest} 
    />
  );
}