import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './bikini-bold.module.scss';

export type BikiniBoldIconProps = Omit<IconProps, 'icon'>;

export function BikiniBoldIcon({ className, ...rest }: BikiniBoldIconProps) {
  return (
    <Icon 
      // ดึงจากค่าย Temaki (bikini)
      icon="temaki:bikini" 
      className={classNames(styles.bikiniBoldIcon, className)} 
      {...rest} 
    />
  );
}