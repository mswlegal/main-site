import React from 'react';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ModalForm from '../Forms/ModalForm';
import { IsInViewProvider } from '@/hooks/viewportListener';
import { formatPhoneNumber } from '@/utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Contact = (props) => {
  const { className, header = 'Contact Us with Confidence' } = props;
  const [openForm, setOpenForm] = React.useState(false);

  function toggleForm() {
    setOpenForm(!openForm);
  }

  return (
    <section className={cx(styles.basic_section, className)} id="contact">
      <div className={styles.contact}>
        <Container className={styles.container}>
          <Row className="justify-content-center">
            <Col md={12} xs={12}>
              <IsInViewProvider>
                <div className={styles.title} data-text-align="center" data-color="dark">
                  <span>Get in Touch</span>
                  <h3>{header}</h3>
                </div>
              </IsInViewProvider>
            </Col>
          </Row>

          <Row className={styles.contact_inner}>
            <Col md={12} xs={12} className={styles.left} data-wow-duration="1s">
              <IsInViewProvider>
                <div className={styles.text}>
                  <p>
                    Fill out the form on this section to get your case reviewed.{' '}
                    <br className="d-block-md d-none" />
                    Or call us, <strong>We are available 24/7</strong>
                  </p>
                </div>
              </IsInViewProvider>
              <ul>
                <li className={styles.list_inner}>
                  <Button className={styles.button} onClick={() => toggleForm()}>
                    <span>Submit Case Now</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="fas text-white" />
                  </Button>
                </li>
                <li>
                  <div className={styles.list_inner}>
                    <span>Call us</span>
                    <a className={styles.phone} href="tel:+132383814444">
                      {`+1 ${formatPhoneNumber('32383814444')}`}
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.list_inner}>
                    <span>Email us</span>
                    <h3>
                      <a className={styles.line_anim} href="mailto:info@mswlegal.com">
                        info@mswlegal.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <ModalForm show={openForm} setShow={setOpenForm} />
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string
};

export default Contact;
