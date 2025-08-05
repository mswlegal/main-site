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
import posthog from 'posthog-js';
import { IsInViewProvider } from '@/hooks/viewportListener';
import { useRouter } from 'next/router';
import AttorneySection from './AttorneySection';

function UberAccident() {
  const phone = '4242768825';
  const { t } = useTranslation('uberAccident');
  const router = useRouter();

  const [variant, setVariant] = React.useState('control');
  const [isContactInView, setIsContactInView] = React.useState(false);

  React.useEffect(() => {
    const allowedVariants = ['control', 'header-on-right'];
    const queryVariant = router.query.variant;

    if (typeof queryVariant === 'string' && allowedVariants.includes(queryVariant)) {
      setVariant(queryVariant);
      return;
    }

    posthog?.onFeatureFlags(() => {
      const value = posthog.getFeatureFlag('landing-page-header-conversion');
      if (value && allowedVariants.includes(value)) {
        setVariant(value);
      }
    });
  }, [router.query.variant]);

  return (
    <>
      <Seo
        title={`${t('metadata.title')} | Mendez & Sanchez APC`}
        description={t('metadata.description')}
        ogImage={require('@images/landing/uber-accident/hero.webp').default.src}
        keywords={t('metadata.keywords')}
        noIndex={true}
      >
        <link rel="preload" href="/_next/static/media/hero.6449c018.webp" as="image" />
      </Seo>

      <LandingPageHeader phone={phone} />
      {variant === 'header-on-right' ? (
        <HeroSectionDesign2 showFloatingButton={!isContactInView} />
      ) : (
        <HeroSection />
      )}
      <ProjectsSection />
      <FaqSection />
      <AttorneySection />
      <IsInViewProvider onChange={setIsContactInView}>
        <div>
          <ContactSection />
        </div>
      </IsInViewProvider>

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
      ...(await serverSideTranslations(locale, ['uberAccident', 'common']))
    }
  };
}

export default UberAccident;
