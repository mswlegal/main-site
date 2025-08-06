import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import MainForm from '@/components/Forms/MainForm';
import { formatPhoneNumber } from '@/utilities';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';

function ContactSection() {
  const phone = '4242768825';

  return (
    <>
      <section className={cx(styles['contact-section'], 'bg-black')} id="bottomForm">
        <Container className={styles.container}>
          <Row className="text-center mb-5 justify-content-center">
            <Col xs={12}>
              <h2 className="text-white mb-5">
                <Translate i18nKey="free_case_review" ns="amazonTruckAccident" />
              </h2>
            </Col>
            <Col md={6} xs={12}>
              <MainForm />
            </Col>
          </Row>
          <Row className="gx-4 gx-lg-5">
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate i18nKey="contact_info.address" ns="amazonTruckAccident" />
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">5440 E. Beverly Blvd, Los Angeles, CA 90022</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate i18nKey="contact_info.email" ns="amazonTruckAccident" />
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="mailto:info@mswlegal.com">info@mswlegal.com</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate i18nKey="contact_info.phone" ns="amazonTruckAccident" />
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <a href={`tel:${phone}`} className="small text-black-50">
                    {formatPhoneNumber(phone)}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className={cx(styles.social, 'd-flex justify-content-center')}>
            <a className="mx-2" href="https://www.linkedin.com/company/mendez-sanchez" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="fab text-white" />
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/people/Mendez-Sanchez-APC/61556121532307/!"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} className="fab text-white" />
            </a>
            <a className="mx-2" href="https://www.instagram.com/mswlegal" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="fab text-white" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactSection;
