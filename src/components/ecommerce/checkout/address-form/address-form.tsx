
import styles from './address-form.module.scss';
import { Button } from '../../../forms/button';
import classNames from 'classnames';

export function AddressForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onSubmit({}); }}>
      <h3 className={styles.title}>Shipping Address</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>First Name</label>
          <input type="text" placeholder="John" required />
        </div>
        <div className={styles.field}>
          <label>Last Name</label>
          <input type="text" placeholder="Doe" required />
        </div>
        <div className={classNames(styles.field, styles.full)}>
          <label>Address</label>
          <textarea placeholder="House No, Street, District..." rows={3} required />
        </div>
        <div className={styles.field}>
          <label>Postal Code</label>
          <input type="text" placeholder="10110" required />
        </div>
        <div className={styles.field}>
          <label>Phone Number</label>
          <input type="tel" placeholder="08x-xxx-xxxx" required />
        </div>
      </div>
      <Button type="submit" fullWidth appearance="primary" size="lg" className={styles.submitBtn}>
        CONTINUE TO PAYMENT
      </Button>
    </form>
  );
}