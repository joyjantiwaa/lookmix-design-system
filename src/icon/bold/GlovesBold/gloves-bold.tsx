import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './gloves-bold.module.scss';

export type GlovesBoldIconProps = Omit<IconProps, 'icon'>;

export function GlovesBoldIcon({ className, ...rest }: GlovesBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Healthicons (ppe-gloves)
      icon="healthicons:ppe-gloves" 
      className={classNames(styles.glovesBoldIcon, className)} 
      {...rest} 
    />
  );
}