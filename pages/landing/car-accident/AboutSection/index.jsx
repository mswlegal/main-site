import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import Form from '../Form';
import { scrollToSection } from '@/utilities';
import { Trans as Translate } from 'next-i18next';

export default function AboutSection() {
  return (
    <section className={cx(styles['about-section'], 'text-center')} id="headerForm">
      <Container className={styles.container}>
        <Row className={cx(styles['form-row'], styles['animate-slide-in'])}>
          <Col xs={12}>
            <h2 className="text-white mb-5">
              <Translate i18nKey="free_case_review" ns="carAccident" />
            </h2>
            <Form />
          </Col>
        </Row>
        <Row className="gx-4 gx-lg-5 justify-content-center">
          <Col lg={8} xs={12}>
            <h2 className="text-white mb-4">
              <Translate i18nKey="compensation_message" ns="carAccident" />
            </h2>
            <p className="text-white">
              <Translate i18nKey="urgent_cases.intro" ns="carAccident" />
              <Translate i18nKey="urgent_cases.team" ns="carAccident" />{' '}
              <a onClick={() => scrollToSection('faq')}>
                <Translate i18nKey="read_more" ns="carAccident" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
