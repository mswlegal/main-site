import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import Head from 'next/head';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { formatPhoneNumber } from '@/utilities';
import posthog from 'posthog-js';
import { useUtmData } from '@/hooks/useUtmData';

export default function LandingPageHeader({ dark, phone }) {
  const headerRef = React.useRef(null);
  const utmData = useUtmData();

  // Ref to track if identify has been called
  const identifiedRef = React.useRef(false);

  const handlePhoneClick = (e) => {
    if (!identifiedRef.current) {
      const distinctId = posthog.get_distinct_id();

      posthog.identify(distinctId, utmData);
      identifiedRef.current = true;
    }

    posthog.capture('phone_clicked', {
      location: 'navbar'
    });

    if (typeof window !== 'undefined' && typeof window.gtag_report_header_phone_click === 'function') {
      window.gtag_report_header_phone_click();
    }
  };

  const stickyNav = () => {
    let offset = window.scrollY;

    if (headerRef.current) {
      if (offset > 100) {
        headerRef.current.classList.add('animate');
      } else {
        headerRef.current.classList.remove('animate');
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    return () => window.removeEventListener('scroll', stickyNav);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/img/logo/logo-light.webp" as="image" />
        <link rel="preload" href="/img/logo/logo-dark.webp" as="image" />
      </Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_header_phone_click() {
              gtag('event', 'conversion', {
                'send_to': 'AW-10869537885/nbSVCJz24vAaEN34_74o'
              });
            }
          `
        }}
      />
      <div ref={headerRef} className={cx(styles.navbar, styles.landing)}>
        <Container>
          <div className={styles.inner}>
            {dark ? (
              <div className={styles['logo']}>
                <a href="#">
                  <Image
                    src="/img/logo/logo-light.webp"
                    alt=""
                    width={200}
                    height={70}
                    loading="eager"
                    priority
                  />
                </a>
              </div>
            ) : (
              <div className={styles['logo']}>
                <a className={styles['light']} href="#">
                  <Image
                    src="/img/logo/logo-light.webp"
                    alt="logo white"
                    width={200}
                    height={70}
                    loading="eager"
                    priority
                  />
                </a>
                <a className={styles['dark']} href="#">
                  <Image
                    src="/img/logo/logo-dark.webp"
                    alt="logo black"
                    width={200}
                    height={70}
                    loading="eager"
                    priority
                  />
                </a>
              </div>
            )}

            <div className={styles.cta}>
              <a href={`tel:+1${phone}`} onClick={handlePhoneClick} className={styles.button}>
                <FontAwesomeIcon icon={faPhoneVolume} className="fas" />
                <span>{formatPhoneNumber(phone)}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

LandingPageHeader.propTypes = {
  phone: PropTypes.string.isRequired,
  dark: PropTypes.bool
};
