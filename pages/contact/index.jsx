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
      />
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
                <p className="mt-4">
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

export default ContactPage;
