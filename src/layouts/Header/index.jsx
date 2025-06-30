import React from 'react';
import { scroll_ } from '../../utilities';
import Image from 'next/image';
import styles from './index.module.scss';
import cx from 'classnames';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

const Header = ({ dark }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
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

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', stickyNav);
    window.addEventListener('scroll', scroll_);
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/img/logo/logo-light.webp" as="image" />
        <link rel="preload" href="/img/logo/logo-dark.webp" as="image" />
      </Head>
      <div ref={headerRef} className={styles['navbar']}>
        <Container>
          <div className={styles['inner']}>
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

            <div className={cx(styles['menu'], { [styles.show]: showMobileMenu })}>
              <button
                type="button"
                className={cx(styles.buttonClose, 'btn-close d-xl-none d-block')}
                aria-label="Close"
                onClick={() => setShowMobileMenu(false)}
              ></button>
              <ul className={styles['anchor_nav']}>
                <li className={styles['current']}>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className={cx(styles.footer, 'd-xl-none d-block')}>
                <Image
                  src="/img/logo/logo-dark.webp"
                  alt="logo black"
                  width={200}
                  height={70}
                  loading="eager"
                />
                <div className={styles.content}>
                  <p>
                    <strong>Los Angeles: </strong>
                    <span>
                      5440 E. Beverly Blvd.
                      <br className="d-sm-none d-block" /> Los Angeles, CA 90022
                    </span>
                  </p>
                  <p>
                    <strong>Pasadena:</strong>
                    <span>
                      1146 E. Green St.
                      <br className="d-sm-none d-block" /> Pasadena, CA 91106
                    </span>
                  </p>
                  <p>
                    <strong>Las Vegas: </strong>
                    <span>
                      300 S 4th Street Suite 825.
                      <br className="d-sm-none d-block" /> Las Vegas, Nevada 89101
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <button className={styles['mobile-trigger']} onClick={() => toggleMobileMenu()}>
              <div className="hamburger">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
