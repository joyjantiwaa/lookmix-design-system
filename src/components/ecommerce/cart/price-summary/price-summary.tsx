
import styles from './price-summary.module.scss';
import { Button } from '../../../forms/button/button';
import classNames from 'classnames';

export type PriceSummaryProps = {
  subtotal: number;
  shippingFee: number;
  discount?: number;
  onCheckout: () => void;
  isLoading?: boolean;
};

export function PriceSummary({
  subtotal,
  shippingFee,
  discount = 0,
  onCheckout,
  isLoading
}: PriceSummaryProps) {
  const total = subtotal + shippingFee - discount;

  return (
    <div className={styles.summaryCard}>
      <h3 className={styles.title}>Order Summary</h3>
      
      <div className={styles.rows}>
        <div className={styles.row}>
          <span>Subtotal</span>
          <span>฿{subtotal.toLocaleString()}</span>
        </div>
        
        <div className={styles.row}>
          <span>Shipping Fee</span>
          <span>{shippingFee === 0 ? 'Free' : `฿${shippingFee.toLocaleString()}`}</span>
        </div>

        {discount > 0 && (
          <div className={classNames(styles.row, styles.discount)}>
            <span>Discount</span>
            <span>-฿{discount.toLocaleString()}</span>
          </div>
        )}

        <hr className={styles.divider} />
        
        <div className={classNames(styles.row, styles.totalRow)}>
          <span>Total</span>
          <span>฿{total.toLocaleString()}</span>
        </div>
      </div>

      <Button 
        fullWidth 
        size="lg" 
        onClick={onCheckout}
        loading={isLoading}
        className={styles.checkoutBtn}
      >
        PROCEED TO CHECKOUT
      </Button>
    </div>
  );
}