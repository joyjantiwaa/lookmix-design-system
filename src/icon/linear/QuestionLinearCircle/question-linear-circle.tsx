
import { Icon, type IconProps } from '../../icon'; // 1. ดึง Master Icon มาใช้
import classNames from 'classnames';
import styles from './question-linear-circle.module.scss';

// 2. ใช้ Omit เพื่อรับ Props ทั้งหมดจาก Icon หลัก (ยกเว้น icon ที่ระบุเอง)
export type QuestionLinearCircleIconProps = Omit<IconProps, 'icon'>;

export function QuestionLinearCircleIcon({ className, ...rest }: QuestionLinearCircleIconProps) {
  return (
    <Icon 
      // 3. ใส่รหัสไอคอน Question Circle (ตัวอย่าง: solar:question-circle-linear)
      icon="solar:question-circle-linear" 
      // 4. ผสม class เพื่อรักษา Style เฉพาะตัวจากไฟล์ .scss
      className={classNames(styles.questionLinearCircleIcon, className)} 
      {...rest} 
    />
  );
}

export default QuestionLinearCircleIcon;