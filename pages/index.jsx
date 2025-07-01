import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Counter from '../src/components/Counter';
import Testimonial from '../src/components/Testimonial';
import Banner from '../src/components/Banner';

const Services = dynamic(() => import('../src/components/Services'), {
  ssr: false
});

const Index = () => {
  return (
    <>
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
