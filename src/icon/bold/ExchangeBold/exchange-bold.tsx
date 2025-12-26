
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './exchange-bold.module.scss';

export type ExchangeBoldIconProps = Omit<IconProps, 'icon'>;

export function ExchangeBoldIcon({ className, ...rest }: ExchangeBoldIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนรหัสไอคอนเป็น Remix Icon (ri:exchange-fill)
      icon="ri:exchange-fill" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.exchangeBoldIcon, className)} 
      {...rest} 
    />
  );
}