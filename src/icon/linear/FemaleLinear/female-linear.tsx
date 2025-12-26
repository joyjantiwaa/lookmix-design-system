
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './female-linear.module.scss';

export type FemaleLinearIconProps = Omit<IconProps, 'icon'>;

export function FemaleLinearIcon({ className, ...rest }: FemaleLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Health Icons (healthicons:female-24px)
      icon="healthicons:female-24px" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.femaleLinearIcon, className)} 
      {...rest} 
    />
  );
}