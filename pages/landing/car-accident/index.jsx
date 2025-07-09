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
import Script from 'next/script';
import { formatPhoneNumber } from '@/utilities';
import LandingPageHeader from '@/layouts/Header/landingPageHeader';

function CarAccident() {
  const phone = '4244671777';

  return (
    <>
      <Seo
        title="Car Accident Lawyers in California | Mendez & Sanchez APC"
        description="Get the compensation you deserve after a car accident. Contact our experienced California legal team today."
        ogImage={require('../../../public/img/landing/car-accident/hero.webp').default.src}
        keywords="car accident attorney, personal injury lawyer, legal help California, legal help Las Vegas, legal help Pasadena, car accident help"
      />

      {/* Google Analytics gtag script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-L0NXZFD17B`}
        strategy="afterInteractive" // Loads after the page becomes interactive
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L0NXZFD17B');
            `}
      </Script>

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
                Injured in a <br />
                <span>Car Accident?</span>
              </h1>
              <h2 className="mx-auto mt-2 mb-5">
                Get Legal Help Today <br className="d-md-block d-none" />
                from a Car Accident Lawyer of Mendez & Sanchez APC
              </h2>
              <a className={styles.button} onClick={() => scrollToSection('headerForm')}>
                Get Started
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
              <h2 className="text-white mb-5">Get your free case review</h2>
              <Form />
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-12">
              <h2 className="text-white mb-4">
                Get the Full Compensation You Deserve. <br />
                Call Us Before the Insurance Company.
              </h2>
              <p className="text-white">
                If you’ve been injured in a car accident anywhere in California, time is critical. Insurance
                companies work fast to limit what they pay—don’t face them without legal help. At Mendez &
                Sanchez, APC, our experienced California car accident lawyers are ready to fight for maximum
                compensation and justice on your behalf.
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
                  Why Californians Trust <br />
                  Mendez & Sanchez APC
                </h2>
                <ul className="text-black-50">
                  <li>
                    <strong>Millions recovered</strong> for accident victims across California
                  </li>
                  <li>No win, no fee—guaranteed</li>

                  <li>
                    <strong>Available 24/7</strong> for urgent case evaluations
                  </li>

                  <li>Fluent in English and Spanish</li>

                  <li>Local team in East LA—serving all of California</li>

                  <li>
                    <strong>We handle everything</strong> from minor crashes to catastrophic injuries
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row gx-0 mb-4 mb-lg-5 py-5 align-items-center">
            <div className="col-lg-6 order-md-0 order-1">
              <div className={cx(styles['featured-text'], 'text-left')}>
                <h2>What We'll Handle For You</h2>
                <ul className="text-black-50">
                  <li>
                    <strong>Full accident investigation</strong> and liability analysis
                  </li>
                  <li>Medical treatment coordination</li>
                  <li>All claims paperwork, deadlines, and insurance negotiations</li>
                  <li>
                    <strong>Help with lost wages</strong> and future earnings documentation
                  </li>
                  <li>Connect you with doctors and specialists statewide</li>
                  <li>
                    Virtual, phone, or in-home consultations—<strong>anywhere in California</strong>
                  </li>
                  <li>Apply for pre-settlement funding so you're never pressured to settle early</li>
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
              <h2 className="mb-5">What You Need to Know Right Now</h2>
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
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">5440 E. Beverly Blvd, Los Angeles, CA 90022</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className={cx(styles.card, 'card py-4 h-100')}>
                <div className="card-body text-center">
                  <FontAwesomeIcon icon={faEnvelope} className="fas mb-2 text-primary" />
                  <h4 className="text-uppercase m-0">Email</h4>
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
                  <h4 className="text-uppercase m-0">Phone</h4>
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
        <div className="container px-4 px-lg-5">© 2025 Mendez & Sanchez - All Rights Reserved</div>
      </footer>
    </>
  );
}

export default CarAccident;
