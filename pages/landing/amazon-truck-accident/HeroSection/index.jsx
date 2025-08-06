import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import { scrollToSection } from '@/utilities';
import Form from '../Form';
import { useTranslation } from 'next-i18next';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';

function HeroSection() {
  const { t } = useTranslation('amazonTruckAccident');

  return (
    <>
      <header className={styles.masthead}>
        <Container
          className={cx(
            styles.container,
            'd-flex h-100 align-items-center justify-content-center flex-column'
          )}
        >
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <h1
                className="mx-auto my-0 mb-3 text-uppercase"
                dangerouslySetInnerHTML={{ __html: t('title') }}
              />
              <h2 className="mx-auto mt-2 mb-5">
                <Translate i18nKey="subtitle" ns="amazonTruckAccident" />
              </h2>
              <a className={styles.button} onClick={() => scrollToSection('headerForm')}>
                <Translate i18nKey="get_started" ns="amazonTruckAccident" />
              </a>
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Section */}
      <section className={cx(styles['about-section'], 'text-center pb-5')} id="headerForm">
        <Container className={styles.container}>
          <Row className={cx(styles['form-row'], styles['animate-slide-in'])}>
            <Col xs={12} className="mx-auto text-center">
              <h2 className="text-white mb-5">
                <Translate i18nKey="free_case_review" ns="amazonTruckAccident" />
              </h2>
              <Form />
            </Col>
          </Row>
          <Row className="gx-4 gx-lg-5 justify-content-center">
            <Col lg={8} xs={12}>
              <h2 className="text-white mb-4">
                <Translate i18nKey="compensation_message" ns="amazonTruckAccident" />
              </h2>
              <p className="text-white">
                <Translate i18nKey="urgent_cases.intro" ns="amazonTruckAccident" />{' '}
                <a onClick={() => scrollToSection('faq')}>
                  <Translate i18nKey="read_more" ns="amazonTruckAccident" />
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
