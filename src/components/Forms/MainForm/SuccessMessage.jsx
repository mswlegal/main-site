import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

const SuccessMessage = ({ firstName }) => (
  <div className={styles.success}>
    <FontAwesomeIcon icon={faCheckCircle} className="fas text-primary mb-4" />
    <h3>Thank you {firstName}</h3>
    <p>Our team will contact you shortly!</p>
  </div>
);

export default SuccessMessage;
