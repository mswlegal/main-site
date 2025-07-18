import React from 'react';
import styles from './index.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import { useFormSubmitLanding } from '@/hooks/formSubmit';
import { getFirstAndLastName } from '@/utilities';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import Script from 'next/script';
import posthog from 'posthog-js';

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

function Form() {
  const { t } = useTranslation('carAccident');
  const [formData, setFormData] = React.useState(initialData);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const [utmData, setUtmData] = React.useState({
    utm_campaign: null,
    utm_source: null,
    utm_medium: null,
    utm_term: null,
    utm_content: null
  });

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = async () => {
    const distinctId = posthog.get_distinct_id();

    const properties = {
      email: email || null,
      phone: phone || null,
      distinct_id: distinctId,
      ...utmData
    };

    // Identify and track in PostHog
    posthog.identify(email || phone || distinctId, properties);
    posthog.capture('form_submitted', properties);

    // Google ads conversion tracking
    if (typeof window !== 'undefined' && typeof window.gtag_report_form_submit === 'function') {
      window.gtag_report_form_submit();
    }

    setHasSubmitted(true);
    await delay(2500);
    setFormData(initialData);
  };

  const { mutate: submitForm } = useFormSubmitLanding({
    onSuccess: handleFormSubmitSuccess,
    onError: (err) => console.error(err)
  });

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      const { firstName, lastName } = getFirstAndLastName(fullName);
      submitForm({
        First: firstName,
        Last: lastName,
        Email: email,
        Phone: phone.replace(/\D/g, ''),
        Summary: summary,
        Marketing_Campaign_Name: utmData.utm_campaign,
        Marketing_Campaign_Source: utmData.utm_source,
        Marketing_Campaign_Medium: utmData.utm_medium,
        Marketing_Source: sources[utmData.utm_source?.toLowerCase()?.trim()]
      });
    },
    [fullName, email, phone, summary, submitForm]
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

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window?.location?.search);
      setUtmData({
        utm_campaign: params?.get('utm_campaign'),
        utm_source: params?.get('utm_source'),
        utm_medium: params?.get('utm_medium'),
        utm_term: params?.get('utm_term'),
        utm_content: params?.get('utm_content')
      });
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_form_submit() {
              gtag('event', 'conversion', {
                'send_to': 'AW-10869537885/POz1CIPbhu4aEN34_74o'
              });
            }
          `
        }}
      />
      <BootstrapForm className={styles['form-signup']} onSubmit={handleSubmit}>
        {hasSubmitted ? (
          <Row className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} className="fas text-primary mb-4" />
            <h3>
              {t('thank_you.header')} {getFirstAndLastName(fullName)?.firstName}
            </h3>
            <p className="mb-5">{t('thank_you.subheader')}</p>
          </Row>
        ) : (
          <Row className="justify-content-center align-items-center flex-column">
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                label="Full name"
                name="fullName"
                type="text"
                placeholder={t('fields.full_name')}
                aria-label="FULL NAME"
                value={fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                name="phone"
                type="text"
                placeholder={t('fields.phone_number')}
                aria-label="PHONE NUMBER"
                value={phone}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                name="email"
                type="email"
                placeholder={t('fields.email')}
                aria-label="EMAIL ADDRESS"
                value={email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                as="textarea"
                name="summary"
                value={summary}
                onChange={handleChange}
                placeholder={t('fields.summary')}
                aria-label="case summary"
                rows={5}
              />
            </Col>
            <Col xs={12}>
              <span className={styles.disclaimer}>{t('disclaimer')}</span>
              <button className={styles.button} id="submitButton" type="submit">
                {t('start_case')}
              </button>
            </Col>
          </Row>
        )}
      </BootstrapForm>
    </>
  );
}

export default Form;
