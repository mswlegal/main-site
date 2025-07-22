import React from 'react';
import styles from './index.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import { useFormSubmit, useFormSubmitLanding } from '@/hooks/formSubmit';
import { getFirstAndLastName } from '@/utilities';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';
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

function MainForm({ className, isLandingPage = false, phoneNumber = '3238381444' }) {
  const [formData, setFormData] = React.useState(initialData);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const utmData = useUtmData(); // Hook to capture UTM parameters

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
    ? useFormSubmitLanding({
        onSuccess: handleFormSubmitSuccess,
        onError: handleFormSubmitError
      })
    : useFormSubmit({
        onSuccess: handleFormSubmitSuccess,
        onError: handleFormSubmitError
      });

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

      // Include optional UTM parameters if present
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

      submitForm(submissionData);
    },
    [fullName, email, phone, summary, submitForm, utmData, sources]
  );

  const handleChange = React.useCallback((e) => {
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

  React.useEffect(() => {
    if (!hasSubmitted) return;
    (async () => {
      await delay(2500);
      setHasSubmitted(false);
    })();
  }, [hasSubmitted]);

  return (
    <>
      <BootstrapForm className={cx(styles['form-signup'], className)} onSubmit={handleSubmit}>
        {hasSubmitted && <SuccessMessage firstName={getFirstAndLastName(fullName)?.firstName} />}
        {hasError && <ErrorMessage onRetry={() => (window.location.href = `tel:+1${phoneNumber}`)} />}

        {!(hasSubmitted || hasError) && (
          <Row className="justify-content-center align-items-center flex-column">
            <Col xs={12} className="mb-4">
              <BootstrapForm.Control
                label="Full name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                aria-label="FULL NAME"
                value={fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col xs={12} className="mb-4">
              <BootstrapForm.Control
                name="phone"
                type="text"
                placeholder="Phone Number"
                aria-label="PHONE NUMBER"
                value={phone}
                onChange={handleChange}
                required
              />
            </Col>
            <Col xs={12} className="mb-4">
              <BootstrapForm.Control
                name="email"
                type="email"
                placeholder="Email"
                aria-label="EMAIL ADDRESS"
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
                placeholder="Tell us about your case..."
                aria-label="case summary"
                rows={5}
              />
            </Col>
            <Col xs={12} className="text-center">
              <span className={styles.disclaimer}>
                By contacting us, you agree to receive communications from Méndez & Sánchez, APC. Message and
                data rates may apply. Text ‘STOP’ to opt-out. Communication does not establish an
                attorney-client relationship.
              </span>
              <button className={styles.button} id="submitButton" type="submit">
                Start Your Free Case Review
              </button>
            </Col>
          </Row>
        )}
      </BootstrapForm>
    </>
  );
}

MainForm.propTypes = {
  className: PropTypes.string,
  isLandingPage: PropTypes.bool,
  phoneNumber: PropTypes.string
};

export default MainForm;
