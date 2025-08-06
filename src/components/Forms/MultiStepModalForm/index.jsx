import React, { useState } from 'react';
import { Modal, ProgressBar } from 'react-bootstrap';
import { StepOne } from './FormSteps/StepOne';
import { StepTwo } from './FormSteps/StepTwo';
import { StepThree } from './FormSteps/StepThree';
import { StepFour } from './FormSteps/StepFour';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function MultiStepFormModal() {
  const [isExiting, setIsExiting] = useState(false);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;
  const handleClose = async () => {
    setIsExiting(true);
    await delay(400);
    setShow(false);
    setIsExiting(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        message: ''
      });
      setIsSubmitted(false);
      setHasError(false);
    }, 300);
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSubmit = () => {
    // Here you would typically send the data to an API
    try {
      console.log('Form submitted:', formData);
      // Simulate API call success
      setIsSubmitted(true);
      setHasError(false);
      nextStep();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitted(false);
      setHasError(true);
      nextStep();
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} />;
      case 2:
        return <StepTwo formData={formData} handleChange={handleChange} />;
      case 3:
        return <StepThree formData={formData} handleChange={handleChange} />;
      case 4:
        return <StepFour isSuccess={isSubmitted} hasError={hasError} handleClose={handleClose} />;
      default:
        return null;
    }
  };
  return (
    <>
      <button onClick={handleShow} className={styles.openButton}>
        Get a Free Consultation
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="md"
        contentClassName={styles.modalContent}
        dialogClassName={cx(styles.modalDialog, { [styles.isExiting]: isExiting })}
      >
        <div className={styles.modalHeader}>
          <button onClick={handleClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h5 className={styles.modalTitle}>{step < 4 ? 'Get a Free Evaluation' : 'Submission Status'}</h5>
        </div>
        <div className={styles.modalBody}>
          {step < 4 && (
            <div className={styles.progressContainer}>
              <ProgressBar
                now={progress}
                className={styles.progressBar}
                style={{ backgroundColor: '#f3f4f6' }}
              />
            </div>
          )}
          <h3 className={styles.stepTitle}>
            {step === 1 && "Let's Get to know you"}
            {step === 2 && 'How can we reach you?'}
            {step === 3 && 'Additional details'}
            {step === 4 && (isSubmitted ? 'Thank you!' : 'Oops!')}
          </h3>
          {renderStep()}
          {step < 4 && (
            <div className={styles.buttonContainer}>
              {step < 3 ? (
                <button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && (!formData.firstName || !formData.lastName)) ||
                    (step === 2 && !formData.email && !formData.phone)
                  }
                  className={`${styles.primaryButton} ${
                    (step === 1 && (!formData.firstName || !formData.lastName)) ||
                    (step === 2 && !formData.email && !formData.phone)
                      ? styles.disabledButton
                      : ''
                  }`}
                >
                  Continue
                </button>
              ) : (
                <button onClick={handleSubmit} className={styles.primaryButton}>
                  Submit
                </button>
              )}
              {step > 1 && (
                <div className={styles.backButtonContainer}>
                  <button onClick={prevStep} className={styles.backButton}>
                    Go back
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
