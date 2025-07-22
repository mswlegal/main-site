import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import MainForm from '@/components/Forms/MainForm';
import { useTranslation } from 'next-i18next';
import { Trans as Translate } from 'next-i18next';
import { scrollToSection } from '@/utilities';

function Design2() {
  const { t } = useTranslation('amazonTruckAccident');

  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={6} xs={12}>
              <IsInViewProvider>
                <h1 dangerouslySetInnerHTML={{ __html: t('title') }} />
              </IsInViewProvider>

              <IsInViewProvider>
                <p className={cx(styles.subheader, 'mt-4')}>
                  <Translate>{t('subtitle')}</Translate>
                </p>
              </IsInViewProvider>
            </Col>
            <Col lg={5} xs={12}>
              <MainForm isLandingPage />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className={cx(styles['about-section'], 'text-center py-5')}>
        <Container className={styles.container}>
          <Row className="gx-4 gx-lg-5 justify-content-center">
            <Col lg={8} xs={12}>
              <h2 className="text-white mb-4">
                <Translate>{t('compensation_message')}</Translate>
              </h2>
              <p className="text-white">
                <Translate>{t('urgent_cases.intro')}</Translate>{' '}
                <a onClick={() => scrollToSection('faq')}>
                  <Translate>{t('read_more')}</Translate>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Design2;
