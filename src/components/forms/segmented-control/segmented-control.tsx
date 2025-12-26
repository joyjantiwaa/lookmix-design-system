
import classNames from 'classnames';
import type { SegmentedControlOption } from './segmented-control-option-type';
import styles from './segmented-control.module.scss';

export type SegmentedControlProps = {
  /**
   * Array of options to display in the segmented control.
   */
  options?: SegmentedControlOption[];

  /**
   * The currently selected value.
   */
  value?: string;

  /**
   * Callback fired when an option is selected.
   */
  onChange?: (value: string) => void;

  /**
   * Additional class name for the container.
   */
  className?: string;
};

const defaultOptions: SegmentedControlOption[] = [
  { label: 'Workwear', value: 'workwear' },
  { label: 'Casual', value: 'casual' },
  { label: 'Formal', value: 'formal' },
  { label: 'Gym', value: 'gym' },
];

export function SegmentedControl({
  options = defaultOptions,
  value = 'workwear',
  onChange,
  className,
}: SegmentedControlProps) {
  const handleOptionClick = (optionValue: string, isDisabled?: boolean) => {
    if (isDisabled) return;
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={classNames(styles.segmentedControl, className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            className={classNames(styles.option, {
              [styles.active]: isSelected,
              [styles.disabled]: option.disabled,
            })}
            onClick={() => handleOptionClick(option.value, option.disabled)}
            disabled={option.disabled}
            aria-pressed={isSelected}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}