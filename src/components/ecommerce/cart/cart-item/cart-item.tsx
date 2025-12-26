
import styles from './cart-item.module.scss';
import { QuantityStepper } from '../../quantity-stepper/quantity-stepper';

export type CartItemProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  properties?: { label: string; value: string }[];
  quantity: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export function CartItem({
  id,
  title,
  image,
  price,
  properties,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.details}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          <button 
            className={styles.removeBtn} 
            onClick={() => onRemove(id)}
            aria-label="Remove item"
          >
            <span className="mingcute--delete-2-line" />
          </button>
        </div>

        {properties && properties.length > 0 && (
          <div className={styles.properties}>
            {properties.map((p, i) => (
              <span key={i} className={styles.propText}>
                {p.label}: <strong>{p.value}</strong>
              </span>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>฿{(price * quantity).toLocaleString()}</span>
          <QuantityStepper 
            value={quantity} 
            onChange={(val) => onQuantityChange(id, val)} 
          />
        </div>
      </div>
    </div>
  );
}