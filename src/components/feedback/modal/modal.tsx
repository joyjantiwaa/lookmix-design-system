import React, { useEffect } from 'react';
import {
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useId,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react';
import classNames from 'classnames';
import styles from './modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlayClick?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
}: ModalProps) {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (!open) onClose();
    },
  });

  const click = useClick(context, { enabled: closeOnOverlayClick });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([click, dismiss, role]);
  const headingId = useId();
  const descriptionId = useId();

  // ล็อก scroll เมื่อ modal เปิด
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <FloatingPortal>
      <FloatingOverlay className={styles.overlay} lockScroll>
        <FloatingFocusManager context={context}>
          <div
            ref={refs.setFloating}
            className={classNames(styles.modalContainer, styles[size])}
            {...getFloatingProps()}
            aria-labelledby={headingId}
            aria-describedby={descriptionId}
          >
            {/* Header */}
            <div className={styles.header}>
              <h2 id={headingId} className={styles.title}>{title}</h2>
              <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                 {/* ก๊อป path X icon มาใส่ตรงนี้ครับ */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div id={descriptionId} className={styles.content}>
              {children}
            </div>

            {/* Footer */}
            {footer && <div className={styles.footer}>{footer}</div>}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
}