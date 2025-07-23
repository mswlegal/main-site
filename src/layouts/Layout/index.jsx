import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { movingAnimation, aTagClick } from '../../utilities';
import Cursor from '../Cursor';
import Footer from '../Footer';
import Header from '../Header';
import Preloader from '../Preloader';
import styles from './index.module.scss';

const Layout = ({ children, headName, dark }) => {
  const router = useRouter();
  const isLandingPage = router.pathname.startsWith('/landing');
  const [showPreloader, setShowPreloader] = useState(true);

  // Effect to manage preloader visibility
  useEffect(() => {
    if (!isLandingPage) {
      setShowPreloader(true); // Show preloader if not on the landing page
    }
    const handleRouteChange = () => {
      setShowPreloader(true); // Show preloader on route change
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isLandingPage, router.events]);

  useEffect(() => {
    movingAnimation();
    aTagClick();
  }, []);

  return (
    <>
      <Head>
        <title>Mendez & Sanchez: Injury Law in Los Angeles & Las Vegas</title>
      </Head>
      {showPreloader && <Preloader />}
      <div className={styles.layout} data-magic-cursor="show">
        {!isLandingPage && <Header dark={dark} />}
        {children}
        {!isLandingPage && <Footer />}
        <Cursor />
      </div>
    </>
  );
};

export default Layout;
