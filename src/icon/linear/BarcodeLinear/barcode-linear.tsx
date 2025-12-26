
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './barcode-linear.module.scss';

export type BarcodeLinearIconProps = Omit<IconProps, 'icon'>;

export function BarcodeLinearIcon({ className, ...rest }: BarcodeLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Vaadin Barcode
      icon="vaadin:barcode" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.barcodeLinearIcon, className)} 
      {...rest} 
    />
  );
}