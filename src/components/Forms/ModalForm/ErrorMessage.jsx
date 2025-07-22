import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';

const ErrorMessage = ({ onRetry }) => (
  <div className={styles.error}>
    <FontAwesomeIcon icon={faTimesCircle} className={styles.danger} />
    <h3>Something went wrong!</h3>
    <p className="text-center">
      We are unable to process your request at the moment. Please contact us directly.
    </p>
    <Button className={styles.actionButton} onClick={onRetry}>
      Call Us
    </Button>
  </div>
);

export default ErrorMessage;
