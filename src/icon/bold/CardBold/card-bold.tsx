
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './card-bold.module.scss';


export type CardBoldIconProps = Omit<IconProps, 'icon'>;

export function CardBoldIcon({ className, ...rest }: CardBoldIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอนบัตร (ตัวอย่าง: solar:card-2-bold หรือ mingcute:bank-card-fill)
      icon="solar:card-2-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัว (ถ้ามี)
      className={classNames(styles.cardBoldIcon, className)} 
      {...rest} 
    />
  );
}