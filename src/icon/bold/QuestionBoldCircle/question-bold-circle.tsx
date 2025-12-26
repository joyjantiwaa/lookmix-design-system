
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './question-bold-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทุกอย่างจาก IconProps ยกเว้น icon ที่เราล็อคค่าไว้เอง
export type QuestionBoldCircleIconProps = Omit<IconProps, 'icon'>;

export function QuestionBoldCircleIcon({ className, ...rest }: QuestionBoldCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Question Circle (ตัวอย่าง: solar:question-circle-bold)
      icon="solar:question-circle-bold" 
      // 4. ผสม class เพื่อรักษา CSS เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.questionBoldCircleIcon, className)} 
      {...rest} 
    />
  );
}