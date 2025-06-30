import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Counter from '../src/components/Counter';
import Testimonial from '../src/components/Testimonial';
import Layout from '../src/layouts/Layout';
import Banner from '../src/components/Banner';

const Portfolio = dynamic(() => import('../src/components/Portfolio'), {
  ssr: false
});

const Index = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Counter />
      <Portfolio />
      <Testimonial />
      <Contact />
    </Layout>
  );
};

export default Index;
