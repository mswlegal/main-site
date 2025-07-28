import dynamic from 'next/dynamic';
import Seo from '@/components/Seo';

// Lazy load components
const About = dynamic(() => import('../src/components/About'), {
  ssr: true, // You can keep it SSR or change it to ssr: false for client-side only
  loading: () => <div>Loading About...</div>
});

const Counter = dynamic(() => import('../src/components/Counter'), {
  ssr: false,
  loading: () => <div>Loading Counter...</div>
});

const Services = dynamic(() => import('../src/components/Services'), {
  ssr: false,
  loading: () => <div>Loading Services...</div>
});

const Testimonial = dynamic(() => import('../src/components/Testimonial'), {
  ssr: false,
  loading: () => <div>Loading Testimonials...</div>
});

const Contact = dynamic(() => import('../src/components/Contact'), {
  ssr: false,
  loading: () => <div>Loading Contact...</div>
});

const Banner = dynamic(() => import('../src/components/Banner'), {
  ssr: true // Keeping SSR for banner, as it might be important above-the-fold
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

      {/* Use next/image for optimization */}
      <Banner />

      <About />
      <Counter />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Index;
