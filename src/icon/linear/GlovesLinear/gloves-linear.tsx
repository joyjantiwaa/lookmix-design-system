import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './gloves-linear.module.scss';

export type GlovesLinearIconProps = Omit<IconProps, 'icon'>;

export function GlovesLinearIcon({ className, ...rest }: GlovesLinearIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Healthicons (ppe-gloves-outline)
      icon="healthicons:ppe-gloves-outline" 
      className={classNames(styles.glovesLinearIcon, className)} 
      {...rest} 
    />
  );
}