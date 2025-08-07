import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Accordion from '@/components/Accordion';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Trans as Translate } from 'next-i18next';

export default function FaqSection() {
  const { t } = useTranslation('carAccident');

  const items = t('what_you_need_to_know.questions', { returnObjects: true });

  return (
    <>
      <section className={styles.faq} id="faq">
        <Container className={styles.container}>
          <Row className="gx-4 gx-lg-5">
            <Col md={10} lg={8} className="mx-auto text-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="fa-2x mb-2 text-white" />
              <h2 className="mb-5">
                <Translate i18nKey="what_you_need_to_know.title" ns="carAccident" />
              </h2>
              <Accordion items={items} className={cx(styles.accordion, 'mb-5')} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

FaqSection.propTypes = {
  className: PropTypes.string
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['amazonTruckAccident']))
    }
  };
}
