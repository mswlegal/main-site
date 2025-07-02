import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import cx from 'classnames';

const LandingPageHeader = ({ dark }) => {
  const headerRef = React.useRef(null);

  const stickyNav = () => {
    let offset = window.scrollY;

    if (headerRef.current) {
      if (headerRef.current) {
        if (offset > 100) {
          headerRef.current.classList.add('animate');
        } else {
          headerRef.current.classList.remove('animate');
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', stickyNav);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/img/logo/logo-light.webp" as="image" />
        <link rel="preload" href="/img/logo/logo-dark.webp" as="image" />
      </Head>
      <div ref={headerRef} className={cx(styles.navbar, styles.landing)}>
        <Container>
          <div className={styles.inner}>
            {dark ? (
              <div className={styles['logo']}>
                <a href="#">
                  <Image src="/img/logo/logo-light.webp" alt="" width={200} height={70} loading="eager" />
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
                  />
                </a>
                <a className={styles['dark']} href="#">
                  <Image
                    src="/img/logo/logo-dark.webp"
                    alt="logo black"
                    width={200}
                    height={70}
                    loading="eager"
                  />
                </a>
              </div>
            )}

            <div className={styles.cta}>
              <a href="tel:32383814444" className={styles.button}>
                <FontAwesomeIcon icon={faPhoneVolume} className="fas" />
                <span>323-838-1444</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPageHeader;
