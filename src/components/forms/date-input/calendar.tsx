import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './calendar.module.scss'; // เพิ่มไฟล์สไตล์

type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
};

export function Calendar({ selected, onSelect }: CalendarProps) {
  return (
    <div className={styles.calendarContainer}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        captionLayout="dropdown"
        fromYear={1950} // ปรับให้ครอบคลุมวันเกิดจริงๆ (เช่น 1950)
        toYear={new Date().getFullYear() + 10} // ให้ถึงปีปัจจุบัน + 10 ปี
        // เพิ่ม classNames เพื่อไปคุมสไตล์ใน SCSS
        classNames={{
          caption_label: styles.captionLabel,
          dropdown: styles.selectDropdown,
        }}
      />
    </div>
  );
}