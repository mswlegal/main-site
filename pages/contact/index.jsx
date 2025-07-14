import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import Contact from '@/components/Contact';

function ContactPage() {
  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={10} xs={12}>
              <IsInViewProvider>
                <h1>
                  Free Case Evaluation <br /> <span>No Fees</span> Unless <span>We Win</span>
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
      {/* 
      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'justify-content-center')}>
            <Col lg={8} xs={12} className="text-center">
              <h2 className="mb-3">Meet Your Attorneys</h2>
              <p>
                Founded on a bedrock of unwavering commitment and relentless dedication, Mendez & Sanchez APC
                stands as a testament to the vision and perseverance of its founders, Giancarlo and Michael.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
      <Contact header="Start Your Free Case Review" />
    </>
  );
}

export default ContactPage;
