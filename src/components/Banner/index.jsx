import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import ModalForm from '../Forms/ModalForm';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import { scrollToSection } from '@/utilities';
import dynamic from 'next/dynamic';

// Lazy load the swiper module and video element to optimize bundle size.
const LazyVideo = dynamic(() => import('./LazyVideo'), { ssr: false });

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0
};

export default function Banner() {
  const [openForm, setOpenForm] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isClient, setIsClient] = useState(false); // Ensure that the client side runs the text animation

  const accidentTypes = [
    'Personal Injury',
    'Car Accident',
    'Truck Accident',
    'Motorcycle Accident',
    'Rideshare Accident',
    'Slip & Fall',
    'Dog Bite',
    'Pedestrian Accident',
    'Wrongful Death'
  ];

  function toggleForm() {
    setOpenForm(!openForm);
  }

  useEffect(() => {
    setIsClient(true); // Trigger client-side logic after the first render
  }, []);

  useEffect(() => {
    if (isClient) {
      let count;
      const delayedAnimation = setTimeout(() => {
        count = setInterval(() => {
          setCurrentText((prev) => (prev === accidentTypes.length - 1 ? 0 : prev + 1));
        }, 2000);
      }, 1500);

      return () => {
        clearInterval(count);
        clearTimeout(delayedAnimation);
      };
    }
  }, [isClient]);

  return (
    <section className={`${styles['main-slider']} ${styles['main-slider-one']}`}>
      <Swiper {...swiperOptions} className={styles.swiper}>
        <SwiperSlide className={styles['swiper-slide']}>
          <div className={styles['image-layer']}>
            {/* Lazy-loaded Video Component */}
            {isClient && <LazyVideo />}
          </div>

          <Container fluid className={styles.container}>
            <div className={styles['main-slider-one__single']}>
              <div className={styles['main-slider-one__content']}>
                <h1>Los Angeles & Las Vegas Personal Injury Attorneys | Mendez & Sanchez APC</h1>
                <h3>Your</h3>
                {accidentTypes.map((item, index) => (
                  <h2 key={`header-${index}`} className={cx({ ['d-none']: index !== currentText })}>
                    {item}
                  </h2>
                ))}
                <h3>Allies</h3>
                <div className={styles['btn-box']}>
                  <Button className={styles.button} onClick={() => toggleForm()}>
                    <span className="txt">Get a Free Consultation</span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
      <div className={styles.button_down}>
        <a className="anchor" onClick={() => scrollToSection('about')}>
          <svg
            width="26px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: '1.5'
            }}
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 20
              }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeWidth: 20
              }}
            />
          </svg>
        </a>
      </div>
      <ModalForm show={openForm} setShow={setOpenForm} />
    </section>
  );
}
