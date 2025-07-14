import React from 'react';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IsInViewProvider } from '@/hooks/viewportListener';
import { formatPhoneNumber } from '@/utilities';
import Form from './Form';
import cx from 'classnames';

const ContactSection = () => {
  return (
    <section className={styles.basic_section}>
      <div className={styles.contact}>
        <Container className={styles.container}>
          <Row className="justify-content-center">
            <Col md={12} xs={12} className="ps-0 text-center mb-5">
              <IsInViewProvider>
                <div className={styles.title} data-color="dark">
                  <span>Connect with Us</span>
                  <h3>Start Your Free Case Review</h3>
                </div>
              </IsInViewProvider>
            </Col>
            <Col md={8} xs={12} className="mb-5">
              <Form />
            </Col>

            <Col md={12} xs={12}>
              <div className={cx(styles.contact_inner, 'text-center')}>
                <div className={styles.left}>
                  <ul>
                    <li>
                      <div className={styles.list_inner}>
                        <span>Call us</span>
                        <a className={styles.phone} href="tel:32383814444">
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
                </div>
              </div>
            </Col>
          </Row>

          {/* <Row className={styles.contact_inner}>
            <Col md={6} xs={12} className={styles.left} data-wow-duration="1s">
              <IsInViewProvider>
                <div className={styles.text}>
                  <p>
                    If you’ve been injured in an accident, don’t wait to take action. Mendez & Sanchez APC is
                    ready to help you pursue the justice and compensation you deserve in California or Nevada.
                    Fill out the form below or call us today for a free, no-obligation consultation. One of
                    our experienced attorneys will review your case and reach out promptly.
                  </p>
                </div>
              </IsInViewProvider>
              <ul>
                <li>
                  <div className={styles.list_inner}>
                    <span>Call us</span>
                    <a className={styles.phone} href="tel:32383814444">
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
            <Col md={6}>test</Col>
          </Row> */}
        </Container>
      </div>
    </section>
  );
};

export default ContactSection;
