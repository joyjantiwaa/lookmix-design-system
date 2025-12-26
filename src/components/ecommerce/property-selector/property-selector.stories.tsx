import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './property-selector.module.scss';

// ร่าง Component ภายในไฟล์ Story เพื่อทดสอบ SCSS ของพี่
const PropertySelector = ({ 
  label, 
  options, 
  type = 'text',
  defaultValue 
}: any) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.optionsGrid}>
        {options.map((opt: any) => (
          <button
            key={opt.value}
            disabled={opt.disabled}
            className={classNames(styles.option, {
              [styles.active]: selected === opt.value,
              [styles.colorType]: type === 'color'
            })}
            onClick={() => setSelected(opt.value)}
          >
            {type === 'color' ? (
              <span 
                className={styles.colorCircle} 
                style={{ backgroundColor: opt.value }} 
              />
            ) : (
              opt.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof PropertySelector> = {
  title: 'E-commerce/PropertySelector',
  component: PropertySelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PropertySelector>;

// 1. การเลือกไซส์ (Size Selection)
export const SizeSelector: Story = {
  args: {
    label: 'Select Size',
    type: 'text',
    defaultValue: 'M',
    options: [
      { label: 'S', value: 'S', disabled: false },
      { label: 'M', value: 'M', disabled: false },
      { label: 'L', value: 'L', disabled: true }, // ของหมด
      { label: 'XL', value: 'XL', disabled: false },
    ],
  },
};

// 2. การเลือกสี (Color Swatches)
export const ColorSelector: Story = {
  args: {
    label: 'Select Color',
    type: 'color',
    defaultValue: '#000000',
    options: [
      { label: 'Black', value: '#000000', disabled: false },
      { label: 'White', value: '#ffffff', disabled: false },
      { label: 'Red', value: '#ff0000', disabled: false },
      { label: 'Blue', value: '#0000ff', disabled: true },
    ],
  },
};