import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { movingAnimation, aTagClick } from '../../utilities';
import Cursor from '../Cursor';
import Footer from '../Footer';
import Header from '../Header';
import Preloader from '../Preloader';
import styles from './index.module.scss';
import { usePosthogSessionRecording } from '@/hooks/usePostHogSessionRecording';

const Layout = ({ children, headName, dark }) => {
  const router = useRouter();
  const isLandingPage = router.pathname.startsWith('/landing');
  const [showPreloader, setShowPreloader] = useState(true);
  const isNotExpertiseOrPost = !(
    router.pathname.startsWith('/expertise-area') || router.pathname.startsWith('/post')
  );

  // session records only on non blog or post pages
  usePosthogSessionRecording(isNotExpertiseOrPost);

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
      {showPreloader && !isLandingPage && <Preloader />}
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
