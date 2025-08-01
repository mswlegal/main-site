import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import Seo from '@/components/Seo';
import LandingPageHeader from '@/layouts/Header/landingPageHeader';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Masthead from './Masthead';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import FaqSection from './FaqSection';
import ContactSection from './ContactSection';
import posthog from 'posthog-js';

function CarAccident() {
  const phone = '4244671777';
  const { t } = useTranslation('carAccident');

  React.useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
      posthog?.startSessionRecording();
    }

    return () => {
      posthog?.stopSessionRecording();
    };
  }, []);
  return (
    <>
      <Seo
        title={`${t('metadata.title')} | Mendez & Sanchez APC`}
        description={t('metadata.description')}
        ogImage={require('@images/landing/car-accident/hero.webp').default.src}
        keywords={t('metadata.keywords')}
        noIndex={true}
      >
        <link rel="preload" href="/_next/static/media/hero.c01fa28f.webp" as="image" />
      </Seo>

      <LandingPageHeader phone={phone} />

      <Masthead />
      <AboutSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />

      <footer className={cx(styles.footer, 'bg-black small text-center text-white-50')}>
        <Container className="px-4 px-lg-5">
          <Row>
            <Col xs={12}>
              <Link href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </Link>
              {' | '}
              <Link href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </Col>
            <Col xs={12}>
              <Translate>{t('copyright')}</Translate>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['carAccident']))
    }
  };
}

export default CarAccident;
