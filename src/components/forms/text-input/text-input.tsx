import React, { type ReactNode, type InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './text-input.module.scss';

export type TextInputProps = {
  /**
   * ID for the input element.
   */
  id?: string;

  /**
   * Value of the input.
   */
  value?: string | number;

  /**
   * Callback when value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback when key is pressed.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean;

  /**
   * Error message to display.
   */
  error?: string;

  /**
   * Placeholder text.
   */
  placeholder?: string;

  /**
   * Label for the input.
   */
  label?: string;

  /**
   * Type of the input (text, password, etc).
   * @default 'text'
   */
  type?: string;

  /**
   * Name attribute.
   */
  name?: string;

  /**
   * Content to render before the input text.
   */
  leadingIcon?: ReactNode;

  /**
   * Content to render after the input text.
   */
  trailingIcon?: ReactNode;

  /**
   * Additional class name for the root element.
   */
  className?: string;

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'prefix' | 'style' | 'className'>;

export function TextInput({
  id,
  value,
  onChange,
  onKeyDown,
  disabled,
  error,
  placeholder,
  label,
  type = 'text',
  name,
  leadingIcon,
  trailingIcon,
  className,
  style,
  ...rest
}: TextInputProps) {
  return (
    <div className={classNames(styles.root, className)} style={style}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div
        className={classNames(styles.inputContainer, {
          [styles.errorState]: !!error,
          [styles.disabledState]: disabled,
        })}
      >
        {leadingIcon && <div className={styles.leadingIcon}>{leadingIcon}</div>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={styles.input}
          aria-invalid={!!error}
          {...rest}
        />
        {trailingIcon && <div className={styles.trailingIcon}>{trailingIcon}</div>}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}