import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { scrollToSection } from '@/utilities';
import styles from './index.module.scss';
import cx from 'classnames';
import { Trans as Translate } from 'next-i18next';

export default function Masthead() {
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
                <Translate i18nKey="title" ns="carAccident" />
              </h1>
              <h2 className="mx-auto mt-2 mb-5">
                <Translate i18nKey="subtitle" ns="carAccident" />
              </h2>
              <a className={styles.button} onClick={() => scrollToSection('headerForm')}>
                <Translate i18nKey="get_started" ns="carAccident" />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
