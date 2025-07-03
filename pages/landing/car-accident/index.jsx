import React from 'react';
import styles from './index.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope, faMobileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import LandingPageHeader from '@/layouts/Header/landingPageHeader';
import { scrollToSection } from '@/utilities';
import Faq from './Faq';

function CarAccident() {
  return (
    <>
      <LandingPageHeader />
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
              <h2 className="text-white mb-5">Request a free case review</h2>
              <form className={styles['form-signup']} data-sb-form-api-token="API_TOKEN">
                {/* Email address input */}
                <div className="row justify-content-center align-items-center flex-column">
                  <div className="col-lg-5 col-12 mb-4">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="FULL NAME"
                      aria-label="FULL NAME"
                    />
                  </div>
                  <div className="col-lg-5 col-12 mb-4">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="PHONE NUMBER"
                      aria-label="PHONE NUMBER"
                    />
                  </div>
                  <div className="col-lg-5 col-12 mb-4">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      aria-label="EMAIL ADDRESS"
                    />
                  </div>
                  <div className="col-lg-5 col-12 mb-4">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="TELL US ABOUT YOUR CASE..."
                      aria-label="TELL US ABOUT YOUR CASE..."
                      rows={5}
                    />
                  </div>
                  <div className="col-12">
                    <span className={styles.disclaimer}>
                      By contacting us, you agree to receive communications from Mendez & Sanchez, APC.
                      Message and data rates may apply. Text "STOP" to opt out. Communication does not
                      establish an attorney-client relationship.
                    </span>
                    <button className={styles.button} id="submitButton" type="submit">
                      Submit for a Free Evaluation
                    </button>
                  </div>
                </div>

                {/* Validation messages */}
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">
                  An email is required.
                </div>
                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">
                  Email is not valid.
                </div>

                {/* Submit success message */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                {/* Submit error message */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
                </div>
              </form>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-12">
              <h2 className="text-white mb-4">
                Don’t Settle for Less Compensation from Insurance. <br className="d-md-none d-block" />
                Call Us First.
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
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-lg-6 col-12">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/img/landing/hand-shake.webp"
                alt="Featured project"
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
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
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
              <img
                className="img-fluid mb-3 mb-lg-0"
                src="/img/landing/signing.webp"
                alt="Featured project"
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
                  <div className="small text-black-50">1146 E. Green St. Pasadena, CA 91106</div>
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
                    <a href="#!">hello@yourdomain.com</a>
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
                  <a href="tel:32383814444" className="small text-black-50">
                    {'(323) 838-1444'}
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
