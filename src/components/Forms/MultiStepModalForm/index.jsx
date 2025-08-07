import React, { useState } from 'react';
import { Modal, ProgressBar } from 'react-bootstrap';
import { StepOne } from './FormSteps/StepOne';
import { StepTwo } from './FormSteps/StepTwo';
import { StepThree } from './FormSteps/StepThree';
import { StepFour } from './FormSteps/StepFour';
import styles from './index.module.scss';
import cx from 'classnames';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  message: ''
};
export default function MultiStepFormModal() {
  const [isExiting, setIsExiting] = useState(false);
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const stepTitles = {
    1: "Let's Get to know you",
    2: 'How can we reach you?',
    3: 'Optional Details',
    4: isSubmitted ? 'Thank you for your submission!' : 'Oops!'
  };

  const handleClose = async () => {
    setIsExiting(true);
    await delay(400);
    setShow(false);
    setIsExiting(false);
    setStep(1);
    setFormData(initialFormData);
    setIsSubmitted(false);
    setHasError(false);
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
    try {
      console.log('Form submitted:', formData);
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
        return (
          <StepFour
            isSuccess={isSubmitted}
            hasError={hasError}
            handleClose={handleClose}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  // Use the custom hook and pass the functions for each swipe direction
  const swipeEvents = useSwipeGesture({
    onSwipeDown: handleClose
  });

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
        <div className={styles.modalHeader} {...swipeEvents}>
          <div className={styles.closeSwipeIndicator} onClick={handleClose}>
            <div className={styles.swipeLine}></div>
          </div>
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
          <h3 className={styles.stepTitle}>{stepTitles[step]}</h3>
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
