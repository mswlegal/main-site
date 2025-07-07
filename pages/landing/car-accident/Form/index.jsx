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

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const initialData = {
  fullName: '',
  email: '',
  phone: '',
  summary: ''
};

function Form() {
  const [formData, setFormData] = React.useState(initialData);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const { fullName, email, phone, summary } = formData;

  const handleFormSubmitSuccess = () => {
    setHasSubmitted(true);
    setFormData(initialData);
  };

  const { mutate, isLoading } = useFormSubmit({
    onSuccess: handleFormSubmitSuccess,
    onError: (err) => console.error(err)
  });

  const handleSubmit = React.useCallback(
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
    },
    [fullName, email, phone, summary, mutate]
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
      <BootstrapForm className={styles['form-signup']} onSubmit={handleSubmit}>
        {hasSubmitted ? (
          <Row className={styles.success}>
            <FontAwesomeIcon icon={faCheckCircle} className="fas text-primary mb-4" />
            <h3>Thank you {getFirstAndLastName(fullName)?.firstName}</h3>
            <p className="mb-5">Out team will contact you shortly!</p>
          </Row>
        ) : (
          <Row className="justify-content-center align-items-center flex-column">
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                controlId="fullName"
                label="Full name"
                name="fullName"
                type="text"
                placeholder="FULL NAME"
                aria-label="FULL NAME"
                value={fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                controlId="phone"
                name="phone"
                type="text"
                placeholder="PHONE NUMBER"
                aria-label="PHONE NUMBER"
                value={phone}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                controlId="phone"
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
                aria-label="EMAIL ADDRESS"
                value={email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col lg={5} xs={12} className="mb-4">
              <BootstrapForm.Control
                as="textarea"
                controlId="summary"
                name="summary"
                value={summary}
                onChange={handleChange}
                placeholder="TELL US ABOUT YOUR CASE..."
                aria-label="TELL US ABOUT YOUR CASE..."
                rows={5}
              />
            </Col>
            <Col xs={12}>
              <span className={styles.disclaimer}>
                By contacting us, you agree to receive communications from Mendez & Sanchez, APC. Message and
                data rates may apply. Text "STOP" to opt out. Communication does not establish an
                attorney-client relationship.
              </span>
              <button className={styles.button} id="submitButton" type="submit">
                Submit for Evaluation
              </button>
            </Col>
          </Row>
        )}
      </BootstrapForm>
    </>
  );
}

export default Form;
