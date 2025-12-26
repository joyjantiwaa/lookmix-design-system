
import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './exchange-linear.module.scss';

export type ExchangeLinearIconProps = Omit<IconProps, 'icon'>;

export function ExchangeLinearIcon({ className, ...rest }: ExchangeLinearIconProps) {
  return (
    <Icon 
      // 3. เปลี่ยนเป็นรหัสไอคอน Remix แบบเส้น (ri:exchange-line)
      icon="ri:exchange-line" 
      // 4. ผสม class ให้ตรงกับชื่อใน .scss
      className={classNames(styles.exchangeLinearIcon, className)} 
      {...rest} 
    />
  );
}