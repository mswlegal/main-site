import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import Form from '../Form';
import { scrollToSection } from '@/utilities';
import { Trans as Translate } from 'next-i18next';
import { useTranslation } from 'next-i18next';

export default function AboutSection() {
  const { t } = useTranslation('carAccident');

  return (
    <section className={cx(styles['about-section'], 'text-center')} id="headerForm">
      <Container className={styles.container}>
        <Row className={cx(styles['form-row'], styles['animate-slide-in'])}>
          <Col xs={12}>
            <h2 className="text-white mb-5">
              <Translate>{t('free_case_review')}</Translate>
            </h2>
            <Form />
          </Col>
        </Row>
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col lg={8} xs={12}>
            <h2 className="text-white mb-4">
              <Translate>{t('compensation_message')}</Translate>
            </h2>
            <p className="text-white">
              <Translate>{t('urgent_cases.intro')}</Translate> <Translate>{t('urgent_cases.team')}</Translate>{' '}
              <a onClick={() => scrollToSection('faq')}>
                <Translate>{t('read_more')}</Translate>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
