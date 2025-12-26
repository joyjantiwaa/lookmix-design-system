
import classNames from 'classnames';
import styles from './avatar.module.scss';

export interface AvatarProps {
  src?: string;          // URL ของรูปภาพ
  alt?: string;          // ข้อความอธิบายรูป
  name?: string;         // ชื่อผู้ใช้ (เพื่อดึงตัวอักษรแรกมาโชว์ถ้าไม่มีรูป)
  size?: 'sm' | 'md' | 'lg' | number; // ขนาดที่มีให้เลือกหรือระบุเป็นตัวเลข
  shape?: 'circle' | 'square';
  className?: string;
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  className,
}: AvatarProps) {
  
  // คำนวณขนาด
  const sizeValue = typeof size === 'number' ? size : undefined;
  
  // ฟังก์ชันดึงตัวอักษรแรกของชื่อ (ถ้ามีชื่อ)
  const getInitials = (name: string) => {
    return name.trim().charAt(0).toUpperCase();
  };

  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt || name} className={styles.image} />;
    }
    
    if (name) {
      return <span className={styles.initials}>{getInitials(name)}</span>;
    }

    // Default เป็นไอคอนคน (ถ้าพี่มี Icon System แล้วเรียกใช้ได้เลย)
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.placeholderIcon}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  };

  return (
    <div
      className={classNames(
        styles.avatar,
        styles[shape],
        typeof size === 'string' ? styles[size] : '',
        className
      )}
      style={sizeValue ? { width: sizeValue, height: sizeValue, fontSize: sizeValue / 2.5 } : {}}
    >
      {renderContent()}
    </div>
  );
}