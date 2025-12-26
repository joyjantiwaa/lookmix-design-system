import { useState } from 'react';
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  autoUpdate,
  useInteractions,
  useClick,
  useDismiss,
  useRole,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';
import classNames from 'classnames';
import styles from './select.module.scss';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'เลือกรายการ...',
  label,
  disabled,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={classNames(styles.container, className)}>
      {label && <label className={styles.label}>{label}</label>}
      
      <div
        ref={refs.setReference}
        className={classNames(styles.control, { [styles.open]: isOpen, [styles.disabled]: disabled })}
        {...getReferenceProps()}
      >
        <span className={classNames(styles.value, { [styles.placeholder]: !selectedOption })}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </div>

      <FloatingPortal>
        {isOpen && (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={styles.menu}
              {...getFloatingProps()}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={classNames(styles.option, {
                    [styles.selected]: option.value === value,
                  })}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </div>
  );
}