import  { useEffect } from 'react';
import classNames from 'classnames';
import styles from './toast.module.scss';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({ 
  id, 
  message, 
  type = 'info', 
  duration = 3000, 
  onClose 
}: ToastProps) {
  
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={classNames(styles.toast, styles[type])} role="alert">
      <div className={styles.icon}>
        {/* พี่สามารถเอา Icon ที่เราสร้างไว้มาใส่ตาม Type ได้ครับ */}
      </div>
      <div className={styles.message}>{message}</div>
      <button className={styles.closeBtn} onClick={() => onClose(id)}>×</button>
    </div>
  );
}