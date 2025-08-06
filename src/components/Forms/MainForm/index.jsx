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
import { useTranslation } from 'next-i18next';
import { Trans as Translate } from 'next-i18next';

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
  const { t } = useTranslation('common');
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
              placeholder={t('fields.full_name')}
              aria-label={t('fields.full_name')}
              value={fullName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              name="phone"
              type="text"
              placeholder={t('fields.phone_number')}
              aria-label={t('fields.phone_number')}
              value={phone}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12} className="mb-4">
            <BootstrapForm.Control
              name="email"
              type="email"
              placeholder={t('fields.email')}
              aria-label={t('fields.email')}
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
              placeholder={t('fields.summary')}
              aria-label={t('fields.summary')}
              rows={5}
            />
          </Col>
          <Col xs={12} className="text-center">
            <span className={styles.disclaimer}>
              <Translate
                i18nKey="disclaimer_with_link"
                components={[<a href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer" />]}
                ns="common"
              />
            </span>
            <button className={styles.button} id="submitButton" type="submit">
              {t('start_case')}
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
  phoneNumber: PropTypes.string
};

export default MainForm;
