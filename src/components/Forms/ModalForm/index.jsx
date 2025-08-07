// ModalForm.js
import React, { useState, useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import styles from './index.module.scss';
import { useFormSubmit, useFormSubmitLanding } from '@/hooks/formSubmit';
import { getFirstAndLastName } from '@/utilities';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';
import { captureEvent, identifyUser, getDistinctId } from '@/hooks/analytics';
import { useUtmData } from '@/hooks/useUtmData';
import InputField from './InputField';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const initialData = {
  fullName: '',
  email: '',
  phone: '',
  summary: ''
};

const sources = {
  google: 'Google Ads'
};

function ModalForm({ show, setShow, isLandingPage = false, phoneNumber = '3238381444' }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false); // Error state
  const [formData, setFormData] = useState(initialData);
  const utmData = useUtmData();

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = () => {
    const distinctId = getDistinctId();

    const properties = {
      email: email || null,
      phone: phone || null,
      distinct_id: distinctId,
      ...utmData
    };

    identifyUser(email || phone || distinctId, properties);
    captureEvent('form_submitted', properties);
    setHasSubmitted(true);
  };

  const handleFormSubmitError = (error) => {
    console.error('Form submission error:', error);
    setHasError(true);
  };

  const { mutate, isLoading } = isLandingPage
    ? useFormSubmitLanding({
        onSuccess: handleFormSubmitSuccess,
        onError: handleFormSubmitError
      })
    : useFormSubmit({
        onSuccess: handleFormSubmitSuccess,
        onError: handleFormSubmitError
      });

  const handleClose = useCallback(async () => {
    setIsExiting(true);
    await delay(400);
    setShow(false);
    setIsExiting(false);
    setFormData(initialData);
    setIsSubmitting(false);
    setHasSubmitted(false);
    setHasError(false); // Reset error state
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

      const submissionData = {
        First: firstName,
        Last: lastName,
        Email: email,
        Phone: phone.replace(/\D/g, ''),
        Summary: summary
      };

      if (utmData) {
        if (utmData.utm_campaign) {
          submissionData.Marketing_Campaign_Name = utmData.utm_campaign;
        }
        if (utmData.utm_source) {
          submissionData.Marketing_Campaign_Source = utmData.utm_source;
          submissionData.Marketing_Source = sources[utmData.utm_source.toLowerCase()?.trim()];
        }
        if (utmData.utm_medium) {
          submissionData.Marketing_Campaign_Medium = utmData.utm_medium;
        }
      }

      mutate(submissionData);
      setIsSubmitting(true);
    },
    [fullName, email, phone, summary, mutate, utmData, sources]
  );

  const swipeEvents = useSwipeGesture({
    onSwipeDown: handleClose
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      fullscreen="sm-down"
      contentClassName={styles.cardModal}
      dialogClassName={cx(styles.modalDialog, { [styles.isExiting]: isExiting })}
    >
      <Modal.Header className={styles.cardImage} closeButton {...swipeEvents}>
        <Modal.Title className={styles.cardHeading}>
          Get started
          <small>Tell us about your case</small>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {hasSubmitted && (
          <SuccessMessage firstName={getFirstAndLastName(fullName)?.firstName} onClose={handleClose} />
        )}
        {hasError && <ErrorMessage onRetry={() => (window.location.href = `tel:+1${phoneNumber}`)} />}

        {!(hasSubmitted || hasError) && (
          <form className={styles.cardForm} onSubmit={handleSubmit}>
            <InputField label="Full name" name="fullName" value={fullName} onChange={handleChange} required />
            <InputField
              label="Phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Details of your case (OPTIONAL)"
              type="textarea"
              name="summary"
              rows={3}
              value={summary}
              onChange={handleChange}
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
          By providing your information, you agree to receive SMS messages, including appointment updates,
          reminders, and follow-ups. Message/data rates may apply. Frequency varies. You may opt out anytime
          by texting STOP.{' '}
          <a href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer">
            Terms and Conditions.
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
