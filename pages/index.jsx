import dynamic from 'next/dynamic';
import Seo from '@/components/Seo';
import { Suspense } from 'react';
import Head from 'next/head';

// Lazy load components
const About = dynamic(() => import('../src/components/About'), {
  ssr: true, // Keeping SSR for About since it might be important above-the-fold
  loading: () => <div>Loading About...</div>
});

const Counter = dynamic(() => import('../src/components/Counter'), {
  ssr: false, // Client-side only
  loading: () => <div>Loading Counter...</div>
});

const Services = dynamic(() => import('../src/components/Services'), {
  ssr: false, // Client-side only
  loading: () => <div>Loading Services...</div>
});

const Testimonial = dynamic(() => import('../src/components/Testimonial'), {
  ssr: false, // Client-side only
  loading: () => <div>Loading Testimonials...</div>
});

const Contact = dynamic(() => import('../src/components/Contact'), {
  ssr: false, // Client-side only
  loading: () => <div>Loading Contact...</div>
});

const Banner = dynamic(() => import('../src/components/Banner'), {
  ssr: true // Keep SSR for the Banner for above-the-fold optimization
});

const Index = () => {
  return (
    <>
      <Seo
        title="Los Angeles & Las Vegas Personal Injury Attorneys | Mendez & Sanchez APC"
        description="Get the compensation you deserve after a car accident. Contact our experienced California legal team today."
        ogImage={require('@images/intro/ms-banner.webp').default.src}
        keywords="Mendez & Sanchez law firm, Los Angeles personal injury lawyers, car accident attorneys California, best injury lawyer LA, personal injury law firm, accident compensation lawyers"
        noIndex={false}
      />

      <Head>
        {/* Preload fonts or critical assets */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          as="style"
          type="font/woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          as="style"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>

      {/* Image Optimization: Using next/image for banner */}
      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner />
      </Suspense>

      {/* Lazy-loaded components */}
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Counter...</div>}>
        <Counter />
      </Suspense>

      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonial />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Index;
