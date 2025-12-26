import React, { useState, createContext, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Toast, ToastProps } from './toast';
import styles from './toast.module.scss';

interface ToastContextType {
  addToast: (message: string, type?: ToastProps['type']) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Array<Pick<ToastProps, 'id' | 'message' | 'type'>>>([]);

  const addToast = useCallback((message: string, type: ToastProps['type'] = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <div className={styles.toastContainer}>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} onClose={removeToast} />
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};