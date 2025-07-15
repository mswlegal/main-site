import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Counter from '../src/components/Counter';
import Testimonial from '../src/components/Testimonial';
import Banner from '../src/components/Banner';
import Seo from '@/components/Seo';

const Services = dynamic(() => import('../src/components/Services'), {
  ssr: false
});

const Index = () => {
  return (
    <>
      <Seo
        title="Mendez & Sanchez: Injury Law in Los Angeles & Las Vegas"
        description="Get the compensation you deserve after a car accident. Contact our experienced California legal team today."
        ogImage={require('../public/img/intro/ms-banner.webp').default.src}
        keywords="car accident attorney, personal injury lawyer, legal help California"
        noIndex={false}
      />
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
