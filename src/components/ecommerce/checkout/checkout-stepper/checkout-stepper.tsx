import React from 'react';
import classNames from 'classnames';
import styles from './checkout-stepper.module.scss';

export type Step = {
  id: number;
  label: string;
};

export type CheckoutStepperProps = {
  steps: Step[];
  currentStep: number; // 1, 2, 3
};

export function CheckoutStepper({ steps, currentStep }: CheckoutStepperProps) {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={classNames(styles.step, {
            [styles.active]: currentStep === step.id,
            [styles.completed]: currentStep > step.id
          })}>
            <div className={styles.circle}>
              {currentStep > step.id ? <span className="mingcute--check-line" /> : step.id}
            </div>
            <span className={styles.label}>{step.label}</span>
          </div>
          {index < steps.length - 1 && <div className={styles.line} />}
        </React.Fragment>
      ))}
    </div>
  );
}