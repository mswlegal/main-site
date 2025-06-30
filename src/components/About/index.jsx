import { call } from '../../svgImage';
import styles from './index.module.scss';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalForm from '../Forms/ModalForm';
import Button from 'react-bootstrap/Button';
import React from 'react';

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
              <div className={styles.main} data-img-url="img/about/lawyers.webp" />
              <span className={`${styles.square} moving_effect`} data-direction="y" data-reverse="yes" />
            </div>
          </Col>
          <Col lg={6} xs={12} className={styles.center}>
            <div className={`${styles.title} wow fadeInUp`} data-wow-duration="1s">
              <span className={styles.small}>About Us</span>
              <h3>
                NO <span>Fees</span>
              </h3>
              <h3>
                Unless <span>We WIN</span>
              </h3>
            </div>
            <div className={`${styles.text} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0.2s">
              <p>
                At <strong>Mendez & Sanchez</strong>, we operate on a contingency fee basis. Our policy allows
                us to guarantee that our clients aren’t putting their own finances at risk.
              </p>
              <p>
                We have successfully handled and <strong>settled OVER 5,000 cases</strong>, skillfully
                navigating everything from tough negotiations to courtroom battles. Our clients only gets the
                best from us, <strong>recovering OVER $1Billion</strong> fighting for them along side every
                step.
              </p>
            </div>

            <Button className={styles.button} onClick={() => toggleForm()}>
              <span className="txt">Discover More</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <ModalForm show={openForm} setShow={setOpenForm} />
    </section>
  );
};

export default About;
