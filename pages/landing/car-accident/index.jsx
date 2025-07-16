import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope, faMobileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { scrollToSection } from '@/utilities';
import Faq from './Faq';
import Image from 'next/image';
import Form from './Form';
import Seo from '@/components/Seo';
import { formatPhoneNumber } from '@/utilities';
import LandingPageHeader from '@/layouts/Header/landingPageHeader';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans as Translate } from 'next-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

function CarAccident() {
  const phone = '4244671777';
  const { t } = useTranslation('carAccident');

  return (
    <>
      <Seo
        title={`${t('metadata.title')} | Mendez & Sanchez APC`}
        description={t('metadata.description')}
        ogImage={require('../../../public/img/landing/car-accident/hero.webp').default.src}
        keywords={t('metadata.keywords')}
        noIndex={true}
      />

      <LandingPageHeader phone={phone} />

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

      {/* About Section */}
      <section className={cx(styles['about-section'], 'text-center')}>
        <Container className={styles.container}>
          <Row className={cx(styles['form-row'], styles['animate-slide-in'])}>
            <Col xs={12} className="mx-auto text-center">
              <h2 className="text-white mb-5">
                <Translate>{t('free_case_review')}</Translate>
              </h2>
              <Form />
            </Col>
          </Row>
          <Row className="gx-4 gx-lg-5 justify-content-center">
            <Col lg={8} xs={12}>
              <h2 className="text-white mb-4">
                <Translate>{t('compensation_message')}</Translate>
              </h2>
              <p className="text-white">
                <Translate>{t('urgent_cases.intro')}</Translate>{' '}
                <Translate>{t('urgent_cases.team')}</Translate>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className={cx(styles['projects-section'], 'bg-light')} id="projects">
        <Container className={styles.container}>
          <Row className="gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <Col lg={6} xs={12}>
              <Image
                src={require('../../../public/img/landing/car-accident/girl-with-phone.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </Col>
            <Col lg={6} xs={12}>
              <div className={cx(styles['featured-text'], 'text-left')}>
                <h2>
                  <Translate>{t('why_choose_us.title')}</Translate>
                </h2>
                <ul className="text-black-50">
                  {t('why_choose_us.points', { returnObjects: true }).map((item, index) => (
                    <li key={`choose-${index}`}>
                      <Translate>{item}</Translate>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <Col lg={6} xs={12} className="order-md-0 order-1">
              <div className={cx(styles['featured-text'], 'text-left')}>
                <h2>
                  <Translate>{t('what_we_handle.title')}</Translate>
                </h2>
                <ul className="text-black-50">
                  {t('what_we_handle.points', { returnObjects: true }).map((item, index) => (
                    <li key={`handle-${index}`}>
                      <Translate>{item}</Translate>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={6} xs={12} className="order-md-1 order-0">
              <Image
                src={require('../../../public/img/landing/hand-shake.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq} id="signup">
        <Container className={styles.container}>
          <Row className="gx-4 gx-lg-5">
            <Col md={10} lg={8} className="mx-auto text-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="fa-2x mb-2 text-white" />
              <h2 className="mb-5">
                <Translate>{t('what_you_need_to_know.title')}</Translate>
              </h2>
              <Faq />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className={cx(styles['contact-section'], 'bg-black')}>
        <Container className={styles.container}>
          <Row className="text-center mb-5">
            <Col xs={12}>
              <h2 className="text-white mb-5">
                <Translate>{t('free_case_review')}</Translate>
              </h2>
              <Form />
            </Col>
          </Row>
          <Row className="gx-4 gx-lg-5">
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate>{t('contact_info.address')}</Translate>
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">5440 E. Beverly Blvd, Los Angeles, CA 90022</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate>{t('contact_info.email')}</Translate>
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="mailto:info@mswlegal.com">info@mswlegal.com</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">
                    <Translate>{t('contact_info.phone')}</Translate>
                  </h4>
                  <hr className="my-4 mx-auto" />
                  <a href={`tel:${phone}`} className="small text-black-50">
                    {formatPhoneNumber(phone)}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className={cx(styles.social, 'd-flex justify-content-center')}>
            <a className="mx-2" href="https://www.linkedin.com/company/mendez-sanchez" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className="fab text-white" />
            </a>
            <a
              className="mx-2"
              href="https://www.facebook.com/people/Mendez-Sanchez-APC/61556121532307/!"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} className="fab text-white" />
            </a>
            <a className="mx-2" href="https://www.instagram.com/mswlegal" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="fab text-white" />
            </a>
          </div>
        </Container>
      </section>

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['carAccident']))
    }
  };
}

export default CarAccident;
