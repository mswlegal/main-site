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
import { Trans as Translate } from 'next-i18next'; // Import Trans as Translate

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
        <div
          className={cx(
            styles.container,
            'container d-flex h-100 align-items-center justify-content-center flex-column'
          )}
        >
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1 className="mx-auto my-0 mb-3 text-uppercase">
                <Translate>{t('title')}</Translate>
              </h1>
              <h2 className="mx-auto mt-2 mb-5">
                <Translate>{t('subtitle')}</Translate>
              </h2>
              <a className={styles.button} onClick={() => scrollToSection('headerForm')}>
                <Translate>{t('get_started')}</Translate>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className={cx(styles['about-section'], 'text-center')}>
        <div className="container px-4 px-lg-5">
          <div id="headerForm" className={cx(styles['form-row'], styles['animate-slide-in'], 'row')}>
            <div className="col-12 mx-auto text-center">
              <h2 className="text-white mb-5">
                <Translate>{t('free_case_review')}</Translate>
              </h2>
              <Form />
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-12">
              <h2 className="text-white mb-4">
                <Translate>{t('compensation_message')}</Translate>
              </h2>
              <p className="text-white">
                <Translate>{t('urgent_cases.intro')}</Translate>{' '}
                <Translate>{t('urgent_cases.team')}</Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={cx(styles['projects-section'], 'bg-light')} id="projects">
        <div className="container px-4 px-lg-5">
          {/* Featured Project Row */}
          <div className="row gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <div className="col-lg-6 col-12">
              <Image
                src={require('../../../public/img/landing/car-accident/girl-with-phone.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </div>
            <div className="col-lg-6 col-12">
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
            </div>
          </div>
          <div className="row gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <div className="col-lg-6 order-md-0 order-1">
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
            </div>
            <div className="col-lg-6 oder-md-1 order-0">
              <Image
                src={require('../../../public/img/landing/hand-shake.webp').default.src}
                width={800}
                height={600}
                data-depth="0.18"
                className="img-fluid mb-3 mb-lg-0"
                alt="injury settlement"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <FontAwesomeIcon icon={faQuestionCircle} className="fa-2x mb-2 text-white" />
              <h2 className="mb-5">
                <Translate>{t('what_you_need_to_know.title')}</Translate>
              </h2>
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className={cx(styles['contact-section'], 'bg-black')}>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
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
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
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
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
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
            </div>
          </div>
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
            <a className="mx-2" href="https://www.instagram.com/mendezsanchezlaw/#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="fab text-white" />
            </a>
          </div>
        </div>
      </section>

      <footer className={cx(styles.footer, 'bg-black small text-center text-white-50')}>
        <div className="container px-4 px-lg-5">
          <Translate>{t('copyright')}</Translate>
        </div>
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
