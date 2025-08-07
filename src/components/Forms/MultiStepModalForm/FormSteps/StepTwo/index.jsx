import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './index.module.scss';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';

export function StepTwo({ formData, handleChange }) {
  const handleOnChange = React.useCallback((e) => {
    const { name, value: originalValue } = e.target;

    if (name === 'phone') {
      e.target.value = formatPhoneNumber(originalValue);
    } else {
      e.target.value = sanitizeInput(originalValue);
    }
    handleChange(e);
  }, []);

  return (
    <Form>
      <div className={styles.formGroup}>
        <Form.Label htmlFor="email" className="visually-hidden">
          Email Address
        </Form.Label>
        <Form.Control
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          className={styles.input}
        />
        <Form.Label htmlFor="phone" className="visually-hidden">
          Phone Number
        </Form.Label>
        <Form.Control
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleOnChange}
          placeholder="Phone number"
          className={styles.input}
        />
      </div>

      <div className={styles.dividerContainer}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerText}>or</div>
        <div className={styles.dividerLine}></div>
      </div>

      <div className={styles.alternativeOptions}>
        <a href="tel:+132383814444" className={styles.alternativeButton}>
          <span>Give us a call now</span>
        </a>
      </div>

      <div className={styles.helpText}>
        By providing your information, you agree to receive SMS messages, including appointment updates,
        reminders, and follow-ups. Message/data rates may apply. Frequency varies. You may opt out anytime by
        texting STOP.{' '}
        <a href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer">
          Terms and Conditions.
        </a>
      </div>
    </Form>
  );
}
