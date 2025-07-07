import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import ModalForm from '../Forms/ModalForm';
import React from 'react';
import Button from 'react-bootstrap/Button';
import cx from 'classnames';
import Container from 'react-bootstrap/Container';
import { scrollToSection } from '@/utilities';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0
};

export default function Banner() {
  const [openForm, setOpenForm] = React.useState(false);
  const [currentText, setCurrentText] = React.useState(0);

  const accidentTypes = [
    'Personal Injury',
    'Car Accidents',
    'Truck Accident',
    'Motorcycle Accident',
    'Rideshare Accident',
    'Slip & Fall',
    'Dog Bites',
    'Pedestrian Accident',
    'Wrongful Death'
  ];

  function toggleForm() {
    setOpenForm(!openForm);
  }

  React.useEffect(() => {
    let count;

    const delayedAnimation = setTimeout(() => {
      count = setInterval(() => {
        setCurrentText((prev) => {
          if (prev === accidentTypes.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 2000);
    }, 1500);

    return () => {
      clearInterval(count);
      clearTimeout(delayedAnimation);
    };
  }, []);

  return (
    <section className={`${styles['main-slider']} ${styles['main-slider-one']}`}>
      <Swiper {...swiperOptions} className={styles.swiper}>
        <SwiperSlide className={styles['swiper-slide']}>
          <div className={styles['image-layer']}>
            <video
              autoPlay
              muted
              loop
              playsInline
              id="headerVideo"
              src="/video/header_video.mp4"
              type="video/mp4"
            >
              <source src="/video/header_video.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <Container fluid className={styles.container}>
            <div className={styles['main-slider-one__single']}>
              <div className={styles['main-slider-one__content']}>
                <h3>Your</h3>
                {accidentTypes.map((item, index) => (
                  <h2 key={`header-${index}`} className={cx({ ['d-none']: index !== currentText })}>
                    {item}
                  </h2>
                ))}
                <h3>Allies</h3>
                <div className={styles['btn-box']}>
                  <Button className={styles.button} onClick={() => toggleForm()}>
                    <span className="txt">Get Free Consultation</span>
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
