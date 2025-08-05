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
                  At <strong>Mendez & Sanchez</strong>, we operate on a contingency fee basis, ensuring
                  clients aren’t putting their own finances at risk. We have successfully handled and{' '}
                  <strong>settled OVER 5,000 cases</strong>, recovering <strong>OVER $1 Billion</strong> in
                  compensation. Our team skillfully navigates tough negotiations, always fighting for the
                  maximum compensation for our clients.
                </p>
                <p>
                  If you've been involved in a car accident—whether it caused serious injury or not—we are
                  here to help. As top-rated <strong>personal injury and car accident lawyers</strong> serving{' '}
                  <strong>Los Angeles, Pasadena, CA, Las Vegas, NV, and surrounding areas</strong>, we handle
                  everything from property damage claims to complex injury cases.
                </p>
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
