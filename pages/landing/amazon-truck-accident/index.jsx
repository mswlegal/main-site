import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import FaqSection from './FaqSection';
import Seo from '@/components/Seo';
import LandingPageHeader from '@/layouts/Header/landingPageHeader';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import HeroSection from './HeroSection';
import HeroSectionDesign2 from './HeroSection/Design2';
import ContactSection from './ContactSection';
import ProjectsSection from './ProjectsSection';

function AmazonTruckAccident({ variant }) {
  const phone = '4242768825';
  const { t } = useTranslation('amazonTruckAccident');

  return (
    <>
      <Seo
        title={`${t('metadata.title')} | Mendez & Sanchez APC`}
        description={t('metadata.description')}
        ogImage={require('@images/landing/amazon-truck-accident/hero.webp').default.src}
        keywords={t('metadata.keywords')}
        noIndex={true}
      />

      <LandingPageHeader phone={phone} />

      {variant === 'header-on-right' ? <HeroSectionDesign2 /> : <HeroSection />}

      <ProjectsSection />
      <FaqSection />
      <ContactSection phone={phone} />

      <footer className={cx(styles.footer, 'bg-black small text-center text-white-50')}>
        <Container className="px-4 px-lg-5">
          <Row>
            <Col xs={12}>
              <Link href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer">
                Terms & Condition
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

export async function getServerSideProps({ locale, req }) {
  const { PostHog } = await import('posthog-node');

  const posthog = new PostHog('YOUR_SERVER_API_KEY', {
    host: 'https://app.posthog.com'
  });

  // Generate or get a distinct_id for the user (important!)
  const distinctId = req.cookies.ph_distinct_id || `anon_${Math.random().toString(36).substring(2, 15)}`;

  // You could also set the cookie here if you want consistent identity across visits

  const variant = (await posthog.getFeatureFlag('landing-page-header-conversion', distinctId)) || 'control';

  // Optionally: record that they were in the experiment
  posthog.capture({
    distinctId,
    event: 'experiment viewed',
    properties: {
      experiment: 'landing-page-header-conversion',
      variant
    }
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['amazonTruckAccident'])),
      variant
    }
  };
}

export default AmazonTruckAccident;
