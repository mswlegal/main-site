import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import ContactSection from './ContactSection';

function ContactPage() {
  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={10} xs={12}>
              <IsInViewProvider>
                <h1>
                  Free Case Evaluation <br /> <span>No Fees</span> Unless <br className="d-md-none d-block" />
                  <span>We Win</span>
                </h1>
              </IsInViewProvider>
              <IsInViewProvider>
                <p className="mt-4">
                  If you’ve been injured in an accident, don’t wait to take action. Mendez & Sanchez APC is
                  ready to help you pursue the justice and compensation you deserve in California or Nevada.
                  Fill out the form below or call us today for a free, no-obligation consultation. One of our
                  experienced attorneys will review your case and reach out promptly.
                </p>
              </IsInViewProvider>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}

export default ContactPage;
