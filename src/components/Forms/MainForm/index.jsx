import React from 'react';
import styles from './index.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import { useFormSubmit, useFormSubmitLanding } from '@/hooks/formSubmit';
import { getFirstAndLastName, sanitizeInput, formatPhoneNumber } from '@/utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { useUtmData } from '@/hooks/useUtmData';

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

function MainForm({ className, isLandingPage = false, phoneNumber = '3238381444', translations = {} }) {
  const {
    fullNamePlaceholder = 'Full Name',
    phonePlaceholder = 'Phone Number',
    emailPlaceholder = 'Email Address',
    summaryPlaceholder = 'Tell Us About your case...',
    startCaseText = 'Start Your Case',
    disclaimerWithLink = 'By providing your information, you agree to receive SMS messages, including appointment updates, reminders, and follow-ups. Message/data rates may apply. Frequency varies. You may opt out anytime by texting STOP. <a href="/legal/terms-conditions" target="_blank">Terms & Conditions</a>.'
  } = translations;

  const [formData, setFormData] = React.useState(initialData);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const utmData = useUtmData();

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = async () => {
    setHasSubmitted(true);
    await delay(2500);
    setFormData(initialData);
  };

  const handleFormSubmitError = () => {
    setHasError(true);
    setHasSubmitted(false);
  };

  const { mutate: submitForm } = isLandingPage
    ? useFormSubmitLanding({ onSuccess: handleFormSubmitSuccess, onError: handleFormSubmitError })
    : useFormSubmit({ onSuccess: handleFormSubmitSuccess, onError: handleFormSubmitError });

  const handleSubmit = React.useCallback(
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
        if (utmData.utm_campaign) submissionData.Marketing_Campaign_Name = utmData.utm_campaign;
        if (utmData.utm_source) {
          submissionData.Marketing_Campaign_Source = utmData.utm_source;
          submissionData.Marketing_Source = sources[utmData.utm_source.toLowerCase()?.trim()];
        }
        if (utmData.utm_medium) submissionData.Marketing_Campaign_Medium = utmData.utm_medium;
      }

      submitForm(submissionData);
    },
    [fullName, email, phone, summary, submitForm, utmData]
  );

  const handleChange = React.useCallback((e) => {
    const { name, value: originalValue } = e.target;
    const value = name === 'phone' ? formatPhoneNumber(originalValue) : sanitizeInput(originalValue);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleRetry = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `tel:+1${phoneNumber}`;
    }
  };

  return (
    <BootstrapForm className={cx(styles['form-signup'], className)} onSubmit={handleSubmit}>
      {mounted && hasSubmitted && <SuccessMessage firstName={getFirstAndLastName(fullName)?.firstName} />}
      {mounted && hasError && <ErrorMessage onRetry={handleRetry} />}

      {mounted && !(hasSubmitted || hasError) && (
        <Row className="justify-content-center align-items-center flex-column">
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              name="fullName"
              type="text"
              placeholder={fullNamePlaceholder}
              aria-label={fullNamePlaceholder}
              value={fullName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              name="phone"
              type="text"
              placeholder={phonePlaceholder}
              aria-label={phonePlaceholder}
              value={phone}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              name="email"
              type="email"
              placeholder={emailPlaceholder}
              aria-label={emailPlaceholder}
              value={email}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              as="textarea"
              name="summary"
              value={summary}
              onChange={handleChange}
              placeholder={summaryPlaceholder}
              aria-label={summaryPlaceholder}
              rows={5}
            />
          </Col>
          <Col xs={12} className="text-center">
            <span className={styles.disclaimer} dangerouslySetInnerHTML={{ __html: disclaimerWithLink }} />
            <button className={styles.button} id="submitButton" type="submit">
              {startCaseText}
            </button>
          </Col>
        </Row>
      )}
    </BootstrapForm>
  );
}

MainForm.propTypes = {
  className: PropTypes.string,
  isLandingPage: PropTypes.bool,
  phoneNumber: PropTypes.string,
  translations: PropTypes.shape({
    fullNamePlaceholder: PropTypes.string,
    phonePlaceholder: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    summaryPlaceholder: PropTypes.string,
    startCaseText: PropTypes.string,
    disclaimerWithLink: PropTypes.string
  })
};

export default MainForm;
