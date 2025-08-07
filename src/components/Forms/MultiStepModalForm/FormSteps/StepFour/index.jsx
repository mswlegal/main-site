import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

const loadingMessages = [
  'Gathering information...',
  'Cross-referencing your details...',
  'Estimating your settlement...'
];

export function StepFour({ isSuccess, hasError, handleClose, formData }) {
  const shouldLoad = Boolean(formData?.location); // Only load if location exists
  const [isLoading, setIsLoading] = useState(shouldLoad);
  const [messageIndex, setMessageIndex] = useState(0);

  // Use `useRef` to store static values that shouldn't change on re-renders
  const estimatedAmountRef = useRef(randomAmount(300000, 900000, 'low'));
  const recentSettlementRef = useRef(randomAmount(400000, 900000, 'high'));
  const weekOrMonthRef = useRef(randomWeekOrMonth());

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  // Function to randomize amounts
  function randomAmount(min, max, type) {
    const low = type === 'low' ? min : max;
    const high = type === 'low' ? max : min;
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  // Function to randomize between week or month
  function randomWeekOrMonth() {
    const weeks = ['last week', 'two weeks ago', 'three weeks ago'];
    const months = ['last month', 'two months ago', 'three months ago'];
    const isMonth = Math.random() > 0.5; // Randomize between week and month
    return isMonth
      ? months[Math.floor(Math.random() * months.length)]
      : weeks[Math.floor(Math.random() * weeks.length)];
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loaderContent}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>{loadingMessages[messageIndex]}</p>
        </div>
      </div>
    );
  }

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
            {isSuccess ? 'We will get back to you shortly.' : 'Submission Error'}
          </h4>
          <p className={styles.messageText}>
            {formData?.location && (
              <span className="mb-3 d-block">
                <strong>Estimated amount to recover:</strong> ${estimatedAmountRef.current.toLocaleString()}.
                <br />
                We recently settled <strong>${recentSettlementRef.current.toLocaleString()}</strong>{' '}
                {weekOrMonthRef.current} for our client in <strong>{formData.location}</strong>.
              </span>
            )}

            {!isSuccess && (
              <span className="d-block">
                There was an error submitting your form.
                <a href="tel:+132383814444">Give us a call</a>
              </span>
            )}
          </p>
        </div>
      </div>

      <button onClick={handleClose} className={styles.closeButton}>
        Close
      </button>
    </div>
  );
}
