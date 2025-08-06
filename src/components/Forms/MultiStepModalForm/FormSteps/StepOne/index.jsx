import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './index.module.scss';

export function StepOne({ formData, handleChange }) {
  return (
    <Form>
      <div className={styles.formGroup}>
        <Form.Label htmlFor="firstName" className="visually-hidden">
          First Name
        </Form.Label>
        <Form.Control
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className={styles.input}
          required
        />
        <Form.Label htmlFor="lastName" className="visually-hidden">
          Last Name
        </Form.Label>
        <Form.Control
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className={styles.input}
          required
        />
      </div>

      <div className={styles.helpText}>We will use this information to personalize your experience.</div>
    </Form>
  );
}
