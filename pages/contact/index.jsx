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
                  Your <span>Winning</span> Team
                </h1>
              </IsInViewProvider>
              <IsInViewProvider>
                <p>
                  Mendez & Sanchez APC is known for its strong commitment to helping clients win the justice
                  and compensation they deserve. With a proven history of recovering millions of dollars, the
                  firm has earned a reputation for being dependable, professional, and relentless in its
                  efforts. Clients trust Mendez & Sanchez with their most difficult cases because they know
                  the team works hard, pays attention to every detail, and truly cares about the people they
                  represent. At Mendez & Sanchez, it's not just about handling legal cases — it's about
                  standing up for what’s right and supporting clients every step of the way.
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
      <Contact />
    </>
  );
}

export default ContactPage;
