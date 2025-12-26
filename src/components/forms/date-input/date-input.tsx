import React, { useState } from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  autoUpdate,
} from '@floating-ui/react';
import { TextInput } from '../text-input/text-input';
import { Calendar } from './calendar';
import { format } from 'date-fns';
import { Icon } from '../../../icon/icon';
import styles from './date-input.module.scss';

export type DateInputProps = {
  /** label ที่จะแสดงเหนือ input (forward ให้ TextInput) */
  label?: string;
  /** ค่าในรูปแบบ YYYY-MM-DD */
  value?: string;
  /** callback เมื่อเลือกวันที่ */
  onChange?: (value: string) => void;
  placeholder?: string;
};

export function DateInput({
  label,
  value,
  onChange,
  placeholder = 'Select date',
}: DateInputProps) {
  const [open, setOpen] = useState(false);

  const selectedDate = value ? new Date(value) : undefined;

  const { refs, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }), // เพิ่ม padding กันชนขอบจอ
      size({
        apply({ rects, elements }) {
          // --- แก้ไขจุดนี้: ป้องกันปฏิทินเล็กเกินไป ---
          Object.assign(elements.floating.style, {
            // บังคับความกว้างขั้นต่ำที่ 280px เพื่อให้ตัวเลขปฏิทิน (7 วัน) แสดงผลครบ
            // แต่ถ้า Input กว้างกว่า 280px ก็จะขยายตาม Input
            width: `${Math.max(rects.reference.width, 280)}px`,
            maxWidth: '320px', // ป้องกันไม่ให้ใหญ่เกินไปในจอ Desktop
          });
        },
      }),
    ],
  });

  const openCalendar = () => setOpen(true);

  return (
    <>
      {/* reference element สำหรับ Floating UI */}
      <div
        ref={refs.setReference}
        style={{ width: '100%', position: 'relative' }}
        onClick={openCalendar}
      >
        <TextInput
          label={label}
          type="text"
          readOnly
          value={value ?? ''}
          placeholder={placeholder}
          className={styles.dateInput}
          style={{ cursor: 'pointer' }}
          trailingIcon={
            <span className={styles.calendarIcon} aria-hidden>
              <Icon
                icon="mingcute:calendar-line"
                size={20}
              />
            </span>
          }
        />

        {/* overlay โปร่งใส → กดตรงไหนก็เปิด calendar */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            cursor: 'pointer',
            zIndex: 1,
          }}
        />
      </div>

      {open && (
        <div
          ref={refs.setFloating}
          style={{
            ...(floatingStyles as React.CSSProperties),
            boxSizing: 'border-box',
            zIndex: 1000,
          }}
          className={styles.calendarWrapper}
          role="dialog"
        >
          {/* หุ้ม Calendar อีกชั้นเพื่อให้เลย์เอาต์ไม่เพี้ยน */}
          <div className={styles.innerCalendar}>
            <Calendar
              selected={selectedDate}
              onSelect={(d) => {
                if (d) {
                  onChange?.(format(d, 'yyyy-MM-dd'));
                }
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}