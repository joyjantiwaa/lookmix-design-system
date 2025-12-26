import { useState } from 'react';
import classNames from 'classnames';
import styles from './payment-method.module.scss';

type PaymentType = 'credit' | 'transfer' | 'cod';

export function PaymentMethod() {
  const [selected, setSelected] = useState<PaymentType>('credit');

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Payment Method</h3>
      <div className={styles.list}>
        <button 
          className={classNames(styles.method, { [styles.active]: selected === 'credit' })}
          onClick={() => setSelected('credit')}
        >
          <span className="mingcute--bank-card-line" />
          <div className={styles.info}>
            <span className={styles.name}>Credit / Debit Card</span>
            <span className={styles.desc}>Visa, Mastercard, JCB</span>
          </div>
        </button>

        <button 
          className={classNames(styles.method, { [styles.active]: selected === 'transfer' })}
          onClick={() => setSelected('transfer')}
        >
          <span className="mingcute--transfer-line" />
          <div className={styles.info}>
            <span className={styles.name}>Bank Transfer</span>
            <span className={styles.desc}>QR PromptPay, Mobile Banking</span>
          </div>
        </button>
      </div>
    </div>
  );
}