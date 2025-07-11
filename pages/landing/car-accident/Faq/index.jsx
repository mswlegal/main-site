import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Accordion from '@/components/Accordion';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Faq() {
  const { t } = useTranslation('carAccident');

  const items = t('what_you_need_to_know.questions', { returnObjects: true });

  return (
    <>
      <Accordion items={items} className={cx(styles.accordion, 'mb-5')} />
    </>
  );
}

Faq.propTypes = {
  className: PropTypes.string
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['carAccident']))
    }
  };
}
