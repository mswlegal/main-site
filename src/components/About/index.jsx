import styles from './index.module.scss';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalForm from '../Forms/ModalForm';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { IsInViewProvider } from '@/hooks/viewportListener';

const About = () => {
  const [openForm, setOpenForm] = React.useState(false);

  function toggleForm() {
    setOpenForm(!openForm);
  }

  return (
    <section className={styles['basic-section']} id="about">
      <Container className={cx(styles.about)}>
        <Row className={cx(styles['about-inner'], 'row')}>
          <Col lg={6} xs={12} className={styles.left}>
            <div className={styles.image}>
              <span className={styles.border}>
                <span className={`${styles.in} moving_effect`} data-direction="x" data-reverse="yes" />
              </span>
              <div className={styles.main} />
              <span className={`${styles.square} moving_effect`} data-direction="y" data-reverse="yes" />
            </div>
          </Col>
          <Col lg={6} xs={12} className={styles.center}>
            <IsInViewProvider>
              <div className={styles.title} data-wow-duration="1s">
                <span className={styles.small}>About Us</span>
                <h3>
                  NO <span>Fees</span>
                </h3>
                <h3>
                  Unless <span>We WIN</span>
                </h3>
              </div>
            </IsInViewProvider>
            <IsInViewProvider>
              <div className={styles.text} data-wow-duration="1s" data-wow-delay="0.2s">
                <p>
                  At <strong>Mendez & Sanchez</strong>, we operate on a contingency fee basis. Our policy
                  allows us to guarantee that our clients aren’t putting their own finances at risk.
                </p>
                <p>
                  We have successfully handled and <strong>settled OVER 5,000 cases</strong>, skillfully
                  navigating everything from tough negotiations to courtroom battles. Our clients only gets
                  the best from us, <strong>recovering OVER $1Billion</strong> fighting for them along side
                  every step.
                </p>
                {/* keywords */}
                <p style={{ position: 'absolute', left: '-9999px' }}>
                  if you've been involved in a car accident — whether it caused serious injury or not — the
                  experienced team at Mendez & Sanchez is here to help. As top-rated personal injury lawyers
                  and car accident attorneys serving Los Angeles, Pasadena, CA, and surrounding areas, we
                  handle everything from property damage claims to complex injury cases. Whether you're
                  searching for the best car accident lawyers in California, need a non-injury car accident
                  lawyer near you, or want a free consultation after a crash, we’ve got you covered. With
                  thousands of successful settlements and a no-fee-unless-we-win policy, you can trust our
                  accident attorneys and auto accident lawyers to fight for the compensation you deserve.
                </p>
                {/* keywords */}
              </div>
            </IsInViewProvider>

            <Button className={styles.button} onClick={() => toggleForm()}>
              <span className="txt">Get a Free Consultation</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <ModalForm show={openForm} setShow={setOpenForm} />
    </section>
  );
};

export default About;
