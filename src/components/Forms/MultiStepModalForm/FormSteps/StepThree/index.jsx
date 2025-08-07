import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './index.module.scss';

export function StepThree({ formData, handleChange }) {
  return (
    <Form>
      {/* Message Field */}
      <div className={styles.formGroup}>
        <Form.Label htmlFor="location" className="visually-hidden">
          Location (Optional)
        </Form.Label>
        <Form.Control
          id="location"
          type="text"
          name="location"
          value={formData.location || ''}
          onChange={handleChange}
          placeholder="City, State"
          className={styles.input}
        />
        <div className={styles.helpText}>
          By providing your location, we can offer an <strong>estimate of what you may recover</strong> based
          on similar cases we've successfully handled in your area.
        </div>
        <Form.Label htmlFor="message" className="visually-hidden">
          Message (Optional)
        </Form.Label>
        <Form.Control
          id="message"
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your case..."
          className={styles.textarea}
        />
      </div>

      {/* Review Section */}
      <div className={styles.reviewContainer}>
        <h5 className={styles.reviewTitle}>Review Your Information</h5>
        <div className={styles.reviewInfo}>
          <p>
            <span className={styles.reviewLabel}>Name:</span> {formData.firstName} {formData.lastName}
          </p>
          {formData.email && (
            <p>
              <span className={styles.reviewLabel}>Email:</span> {formData.email}
            </p>
          )}
          {formData.phone && (
            <p>
              <span className={styles.reviewLabel}>Phone:</span> {formData.phone}
            </p>
          )}
        </div>
      </div>
    </Form>
  );
}
