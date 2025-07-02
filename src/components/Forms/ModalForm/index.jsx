import Modal from 'react-bootstrap/Modal';
import styles from './index.module.scss';
import Button from 'react-bootstrap/Button';
import React from 'react';
import cx from 'classnames';
import { useFormSubmit } from '@/hooks/formSubmit';

function ModalForm(props) {
  const { show, setShow } = props;
  const [isExiting, setIsExiting] = React.useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleClose = async () => {
    setIsExiting(true);
    await delay(400);
    setShow(false);
  };

  const handleModalExit = () => setIsExiting(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      First: 'John',
      Last: 'Doe',
      Email: 'john@example.com',
      Phone: '2222222222',
      Summary: 'TEST'
    };
    mutate(formData);
  };

  const handleFormSubmitSuccess = () => {
    console.log('SUCCESS');
  };

  const handleFormSubmitError = () => {
    console.log('ERROR');
  };

  const { mutate, isLoading, error, data } = useFormSubmit({
    onSuccess: handleFormSubmitSuccess,
    onError: handleFormSubmitError
  });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        fullscreen={'sm-down'}
        contentClassName={styles.cardModal}
        dialogClassName={cx(styles.modalDialog, { [styles.isExiting]: isExiting })}
        onExited={handleModalExit}
      >
        <Modal.Header className={styles.cardImage} closeButton>
          <Modal.Title className={styles.cardHeading}>
            Get started
            <small>Tell us about your case</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={styles.cardForm} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <input type="text" className={styles.inputField} required />
              <label className={styles.inputLabel}>Full name</label>
            </div>
            <div className={styles.input}>
              <input type="text" className={styles.inputField} required />
              <label className={styles.inputLabel}>Email</label>
            </div>
            <div className={styles.input}>
              <input type="text" className={styles.inputField} required />
              <label className={styles.inputLabel}>Phone</label>
            </div>
            <div className={styles.input}>
              <textarea rows="3" cols="100" className={styles.inputField} required></textarea>
              <label className={styles.inputLabel}>Details of your case</label>
            </div>
            <div className={styles.action}>
              <Button type="submit" className={styles.actionButton}>
                Get started
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={styles.cardInfo}>
          <p className="text-center">
            By providing your phone number, you agree to start receiving SMS messages, including appointment
            updates, appointment reminders, and follow-ups. Message and data rates may apply & message
            frequency varies. You are free to opt-out at any time by texting STOP in reply to your messages.
            <a href="#">Terms and Conditions.</a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
