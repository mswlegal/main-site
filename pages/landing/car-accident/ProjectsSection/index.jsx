import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ProjectsSection() {
  const { t } = useTranslation('carAccident');

  return (
    <>
      <section className={cx(styles['projects-section'], 'bg-light')} id="projects">
        <Container className={styles.container}>
          <Row className="gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <Col lg={6} xs={12}>
              <Image
                src={require('@images/landing/car-accident/girl-with-phone.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </Col>
            <Col lg={6} xs={12}>
              <div className={cx(styles['featured-text'], 'text-left')}>
                <h2>
                  <Translate i18nKey="why_choose_us.title" ns="carAccident" />
                </h2>
                <ul className="text-black-50">
                  {t('why_choose_us.points', { returnObjects: true }).map((item, index) => (
                    <li key={`choose-${index}`}>
                      <Translate i18nKey={item} ns="carAccident" />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <Col lg={6} xs={12} className="order-md-0 order-1">
              <div className={cx(styles['featured-text'], 'text-left')}>
                <h2>
                  <Translate i18nKey="what_we_handle.title" ns="carAccident" />
                </h2>
                <ul className="text-black-50">
                  {t('what_we_handle.points', { returnObjects: true }).map((item, index) => (
                    <li key={`handle-${index}`}>
                      <Translate i18nKey={`what_we_handle.points.${index}`} ns="carAccident" />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={6} xs={12} className="order-md-1 order-0">
              <Image
                src={require('@images/landing/hand-shake.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProjectsSection;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['carAccident'])) // Adjusted namespace for correct translation file
    }
  };
}
