
import classNames from 'classnames';
import styles from './property-selector.module.scss';

export type PropertyOption = {
  label: string;
  value: string;
  disabled?: boolean;
  color?: string; // สำหรับกรณีเลือกสี
};

export type PropertySelectorProps = {
  label: string;
  options: PropertyOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  type?: 'text' | 'color';
};

export function PropertySelector({ label, options, selectedValue, onChange, type = 'text' }: PropertySelectorProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.optionsGrid}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            disabled={option.disabled}
            onClick={() => onChange(option.value)}
            className={classNames(styles.option, {
              [styles.active]: selectedValue === option.value,
              [styles.colorType]: type === 'color',
            })}
            title={option.label}
          >
            {type === 'color' ? (
              <span className={styles.colorCircle} style={{ backgroundColor: option.color }} />
            ) : (
              option.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
}