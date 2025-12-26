
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './customer-service-bold.module.scss';

export type CustomerServiceBoldIconProps = Omit<IconProps, 'icon'>;

export function CustomerServiceBoldIcon({ className, ...rest }: CustomerServiceBoldIconProps) {
  return (
    <Icon 
      // แก้รหัสไอคอนให้ตรงกับที่พี่เลือก (เปลี่ยน -- เป็น :)
      icon="streamline-plump:customer-support-7-solid" 
      // ใช้ class ให้ตรงกับในไฟล์ .scss
      className={classNames(styles.customerServiceBoldIcon, className)} 
      {...rest} 
    />
  );
}