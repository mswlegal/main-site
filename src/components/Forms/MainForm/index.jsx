import React from 'react';
import styles from './index.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import { useFormSubmit } from '@/hooks/formSubmit';
import { getFirstAndLastName } from '@/utilities';
import { sanitizeInput, formatPhoneNumber } from '@/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import PropTypes from 'prop-types';

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

function MainForm({ className }) {
  const [formData, setFormData] = React.useState(initialData);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = async () => {
    setHasSubmitted(true);
    await delay(2500);
    setFormData(initialData);
  };

  const { mutate: submitForm } = useFormSubmit({
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
        Summary: summary
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

  return (
    <>
      <BootstrapForm className={cx(styles['form-signup'], className)} onSubmit={handleSubmit}>
        {hasSubmitted ? (
          <Row className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} className="fas text-primary mb-4" />
            <h3>Thank you! {getFirstAndLastName(fullName)?.firstName}</h3>
            <p className="mb-5">Our team will contact you shortly!</p>
          </Row>
        ) : (
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
  className: PropTypes.string
};

export default MainForm;
