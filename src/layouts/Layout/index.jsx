import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { movingAnimation, aTagClick, dataImage } from '../../utilities';
import Cursor from '../Cursor';
import Footer from '../Footer';
import Header from '../Header';
import Preloader from '../Preloader';
import styles from './index.module.scss';

const Layout = ({ children, headName, dark }) => {
  const router = useRouter();
  const isLandingPage = router.pathname.startsWith('/landing');

  React.useEffect(() => {
    dataImage();
    movingAnimation();
    aTagClick();
    console.log('Tests');
  }, []);

  return (
    <>
      <Head>
        <title>Mendez & Sanchez: Injury Law in Los Angeles & Las Vegas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Preloader />
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
