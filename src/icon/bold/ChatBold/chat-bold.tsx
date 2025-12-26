
import { Icon, type IconProps } from '../../icon'; // ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './chat-bold.module.scss';

export type ChatBoldIconProps = Omit<IconProps, 'icon'>;

export function ChatBoldIcon({ className, ...rest }: ChatBoldIconProps) {
  return (
    <Icon 
      // ใส่รหัสไอคอนแชท (ตัวอย่าง: solar:chat-round-dots-bold)
      icon="solar:chat-round-dots-bold" 
      // ผสม class เพื่อให้ยังทำงานร่วมกับไฟล์ .scss เฉพาะตัวได้
      className={classNames(styles.chatBoldIcon, className)} 
      {...rest} 
    />
  );
}