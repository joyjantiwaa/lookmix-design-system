import { Icon, type IconProps } from '../../icon'; 
import classNames from 'classnames';
import styles from './dress-linear.module.scss';

export type DressLinearIconProps = Omit<IconProps, 'icon'>;

export function DressLinearIcon({ className, ...rest }: DressLinearIconProps) {
  return (
    <Icon 
      // ใน Iconify สไตล์เส้นหนาของ Phosphor จะใช้ชื่อ "ph:dress-bold"
      // (ซึ่งเรานำมาใช้ในหมวดหมู่ Linear ของเราเพื่อให้ดูเป็นเส้นโปร่ง)
      icon="ph:dress-bold" 
      className={classNames(styles.dressLinearIcon, className)} 
      {...rest} 
    />
  );
}