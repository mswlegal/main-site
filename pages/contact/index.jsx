import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import AboutSection from '@/components/About/AboutSection';
import StepsSection from '@/components/Steps';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import MainForm from '@/components/Forms/MainForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const faqSchemaMarkup = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a personal injury lawyer cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mendez & Sanchez APC offers free consultations and works on a contingency fee basis, so you pay nothing unless we win your case.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I choose the right law firm for my case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Mendez & Sanchez, we recommend choosing a law firm with proven experience in your specific legal area, a strong record of successful cases, and positive client reviews. Our team specializes in personal injury law and offers free consultations to help you understand your options and feel confident in your decision.'
      }
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first meeting with a lawyer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you meet with Mendez & Sanchez, bring any relevant documents such as accident reports, medical records, correspondence, and any evidence related to your case. Preparing these materials will help us evaluate your case thoroughly and provide you with the best legal advice.'
      }
    },
    {
      '@type': 'Question',
      name: 'What should I do after a car accident?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After a car accident, it’s important to ensure everyone’s safety and call emergency services if needed. At Mendez & Sanchez, we advise gathering as much information as possible — including photos, witness contacts, and police reports. Then contact us promptly so we can guide you through the claims process and protect your rights.'
      }
    }
  ]
});

function ContactPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [subheader, setSubheader] = React.useState('');

  React.useEffect(() => {
    if (slug) {
      // Convert kebab-case to Title Case
      const formatted = slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSubheader(formatted);
    }
  }, [slug]);

  return (
    <>
      <Seo
        title="Contact a Personal Injury Lawyers in Los Angeles & Las Vegas | Mendez & Sanchez APC"
        description="Injured in an accident? Mendez & Sanchez APC provides aggressive, experienced legal representation for personal injury, car accidents, and workers' compensation in Los Angeles & Las Vegas. No fee unless we win!"
        ogImage={require('@images/intro/ms-banner.webp').default.src}
        keywords="Los Angeles personal injury lawyer, Las Vegas injury attorney, car accident lawyer LA, workers compensation attorney, injury law firm California, slip and fall lawyer, best personal injury attorney, accident attorney near me, free case review injury lawyer, Mendez & Sanchez law firm"
        noIndex={false}
        canonicalUrl="https://www.mendezsanchezlaw.com/contact"
      >
        <link rel="preload" as="image" href={require('@images/hero/hero.webp')} type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchemaMarkup }}
          key="jsonld-faq"
        />
      </Seo>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={6} xs={12}>
              {subheader.length > 0 && <span className={styles.subheader}>{subheader}</span>}
              <IsInViewProvider>
                <h1>
                  Free Case Evaluation <br /> <span>No Fees</span> Unless <br className="d-md-none d-block" />
                  <span>We Win</span>
                </h1>
              </IsInViewProvider>

              <IsInViewProvider>
                <p className={cx(styles.subheader, 'mt-4')}>
                  If you’ve been injured in an accident, don’t wait to take action. Mendez & Sanchez APC is
                  ready to help you pursue the justice and compensation you deserve in California or Nevada.
                  Fill out the form below or call us today for a free, no-obligation consultation. One of our
                  experienced attorneys will review your case and reach out promptly.
                </p>
              </IsInViewProvider>
            </Col>
            <Col lg={5} xs={12}>
              <MainForm />
            </Col>
          </Row>
        </Container>
      </section>
      <StepsSection />
      <AboutSection />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default ContactPage;
