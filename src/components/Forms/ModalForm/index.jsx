import React, { useState, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import styles from './index.module.scss';
import { useFormSubmit } from '@/hooks/formSubmit';
import { getFirstAndLastName } from '@/utilities';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const InputField = React.memo(({ label, type = 'text', name, value, onChange, required = false, rows }) => {
  const inputId = `input-${name}`;
  return (
    <div className={styles.input}>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          className={styles.inputField}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          className={styles.inputField}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      <label htmlFor={inputId} className={styles.inputLabel}>
        {label}
      </label>
    </div>
  );
});

const initialData = {
  fullName: '',
  email: '',
  phone: '',
  summary: ''
};

function ModalForm({ show, setShow }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = () => {
    setHasSubmitted(true);
  };

  const { mutate, isLoading } = useFormSubmit({
    onSuccess: handleFormSubmitSuccess,
    onError: (err) => console.error(err)
  });

  const handleClose = useCallback(async () => {
    setIsExiting(true);
    await delay(400);
    setShow(false);
    setIsExiting(false);
    setFormData(initialData);
    setIsSubmitting(false);
    setHasSubmitted(false);
  }, [setShow]);

  const handleChange = useCallback((e) => {
    const { name, value: originalValue } = e.target;
    let value;

    if (name === 'phone') {
      value = formatPhoneNumber(originalValue);
    } else {
      value = sanitizeInput(originalValue);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { firstName, lastName } = getFirstAndLastName(fullName);

      mutate({
        First: firstName,
        Last: lastName,
        Email: email,
        Phone: phone.replace(/\D/g, ''),
        Summary: summary
      });
      setIsSubmitting(true);
    },
    [fullName, email, phone, summary, mutate]
  );

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      fullscreen="sm-down"
      contentClassName={styles.cardModal}
      dialogClassName={cx(styles.modalDialog, { [styles.isExiting]: isExiting })}
    >
      <Modal.Header className={styles.cardImage} closeButton>
        <Modal.Title className={styles.cardHeading}>
          Get started
          <small>Tell us about your case</small>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {hasSubmitted ? (
          <div className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} className="fas text-primary mb-4" />
            <h3>Thank you {getFirstAndLastName(fullName)?.firstName}</h3>
            <p>Out team will contact you shortly!</p>
            <Button className={cx(styles.actionButton, 'mt-3')} onClick={() => handleClose()}>
              Close
            </Button>
          </div>
        ) : (
          <form className={styles.cardForm} onSubmit={handleSubmit}>
            <InputField label="Full name" name="fullName" value={fullName} onChange={handleChange} required />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
            <InputField
              label="Details of your case"
              type="textarea"
              name="summary"
              rows={3}
              value={summary}
              onChange={handleChange}
              required
            />

            <div className={styles.action}>
              <Button type="submit" className={styles.actionButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Get started'}
              </Button>
            </div>
          </form>
        )}
      </Modal.Body>

      <Modal.Footer className={styles.cardInfo}>
        <p className="text-center">
          By providing your phone number, you agree to receive SMS messages, including appointment updates,
          reminders, and follow-ups. Message/data rates may apply. Frequency varies. You may opt out anytime
          by texting STOP. <a href="#">Terms and Conditions.</a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
