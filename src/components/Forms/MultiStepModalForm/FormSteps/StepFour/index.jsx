import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

export function StepFour({ isSuccess, hasError, handleClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.statusContent}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={isSuccess ? faCheckCircle : faTimesCircle}
            size="4x"
            className={isSuccess ? styles.successIcon : styles.errorIcon}
          />
        </div>

        <div className={styles.messageContainer}>
          <h4 className={styles.messageTitle}>
            {isSuccess ? 'Form Submitted Successfully!' : 'Submission Error'}
          </h4>
          <p className={styles.messageText}>
            {isSuccess
              ? 'Thank you for your submission. We will get back to you shortly.'
              : 'There was an error submitting your form. Please try again later.'}
          </p>
        </div>
      </div>

      <button onClick={handleClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
}
