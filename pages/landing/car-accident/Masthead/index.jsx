import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { scrollToSection } from '@/utilities';
import styles from './index.module.scss';
import cx from 'classnames';
import { Trans as Translate } from 'next-i18next';
import { useTranslation } from 'next-i18next';

export default function Masthead() {
  const { t } = useTranslation('carAccident');

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
              <h1 className="mx-auto my-0 mb-3 text-uppercase">
                <Translate>{t('title')}</Translate>
              </h1>
              <h2 className="mx-auto mt-2 mb-5">
                <Translate>{t('subtitle')}</Translate>
              </h2>
              <a className={styles.button} onClick={() => scrollToSection('headerForm')}>
                <Translate>{t('get_started')}</Translate>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
