
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './customer-service-linear.module.scss';

export type CustomerServiceLinearIconProps = Omit<IconProps, 'icon'>;

export function CustomerServiceLinearIcon({ 
  className, 
  size, 
  ...rest 
}: CustomerServiceLinearIconProps) {
  return (
    <Icon 
      // แก้เป็นรหัสไอคอน Streamline ที่พี่ต้องการ
      icon="streamline-plump:customer-support-7" 
      size={size} 
      className={classNames(styles.customerServiceLinearIcon, className)} 
      {...rest} 
    />
  );
}