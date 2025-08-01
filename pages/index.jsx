import dynamic from 'next/dynamic';
import Seo from '@/components/Seo';
import { Suspense } from 'react';

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

const schemaMarkup = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://www.mendezsanchezlaw.com/',
  name: 'Mendez & Sanchez APC',
  legalName: 'Mendez & Sanchez, A Professional Corporation',
  image: 'https://www.mendezsanchezlaw.com/img/logo/logo-light.webp',
  url: 'https://www.mendezsanchezlaw.com',
  telephone: '+1-323-838-1444',
  email: 'info@mendezsanchezlaw.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5440 E. Beverly Blvd.',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    postalCode: '90022',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0173976,
    longitude: -118.1576871
  },
  hasMap: 'https://www.google.com/maps/place/5440+E+Beverly+Blvd,+Los+Angeles,+CA+90022',
  openingHoursSpecification: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ].map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: '09:00',
    closes: '18:00'
  })),
  areaServed: [
    { '@type': 'Place', name: 'Los Angeles' },
    { '@type': 'Place', name: 'Las Vegas' }
  ],
  sameAs: [
    'https://www.facebook.com/people/Mendez-Sanchez-APC/61556121532307/',
    'https://www.instagram.com/mendezsanchezlaw/',
    'https://www.linkedin.com/company/mendez-sanchez'
  ],
  founder: {
    '@type': 'Person',
    name: 'GianCarlo Mendez'
  },
  description:
    "Top-rated personal injury lawyers in Los Angeles & Las Vegas. We fight for maximum compensation in car accidents, workers' comp, and more. Free consultations and no fees unless we win."
});
const Index = () => {
  return (
    <>
      <Seo
        title="Top Personal Injury & Car Accident Lawyers in Los Angeles & Las Vegas | Mendez & Sanchez APC"
        description="Get the compensation you deserve after a car accident. Contact our experienced California legal team today."
        ogImage={require('@images/intro/ms-banner.webp').default.src}
        keywords="personal injury lawyer, car accident attorney, car accident lawyer no injury, car accident lawyer near me, accident attorney, car accident lawyers, property damage lawyer, injury lawyer, auto accident lawyer, personal injury attorney, car accident lawyer near Pasadena, CA, best car accident lawyers in Los Angeles, best car accident lawyers in California, car accident lawyer Los Angeles, car accident lawyer free consultation, non injury car accident lawyers near me"
        canonicalUrl="https://www.mendezsanchezlaw.com/"
        noIndex={false}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
          key="jsonld-schema"
        />
      </Seo>

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
