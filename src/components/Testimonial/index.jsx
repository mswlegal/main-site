'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: `.${styles.prev}`,
      nextEl: `.${styles.next}`
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    autoHeight: true
  };

  return (
    <div className={styles.basic_section} id="testimonial">
      <Container className={styles.testimonials}>
        <Row className={styles.row}>
          <Col md={5} xs={12} className={styles.left}>
            <div className={styles.image}>
              <Image
                src={require('../../../public/img/testimonial/reviews.webp').default.src}
                width={600}
                height={600}
                data-depth="0.18"
                className="layer"
                alt="five star reviews"
              />
            </div>
          </Col>
          <Col md={7} xs={12} className={styles.right}>
            <div className={styles.right_in}>
              <div className={styles.title} data-text-align="left" data-color="light">
                <span className={styles.small}>Testimonial</span>
                <h3>What Our Clients Say</h3>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                {...props}
                className={cx('owl_carousel', styles.swiper)}
              >
                <SwiperSlide className={styles['swiper-slide']}>
                  <div className={styles.text}>
                    <p>
                      Michael was an outstanding attorney. He always made sure to keep me in the loop with my
                      case and worked nonstop to help get the outcome I deserved. I would highly recommend him
                      to anyone who needs only the best lawyer and I will definitely return to him again in
                      the future!
                    </p>
                  </div>
                  <div className={styles.name}>
                    <h3>
                      Rachel G. <span>Los Angeles</span>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <div className={styles.text}>
                    <p>
                      Super professional, friendly staff. The team was so knowledgeable and helpful throughout
                      the entire legal process of my car accident. I highly recommend using them!
                    </p>
                  </div>
                  <div className={styles.name}>
                    <h3>
                      Michelle N. <span>Los Angeles</span>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <div className={styles.text}>
                    <p>
                      Very professional and diligent. Got my case resolved in a timely manner and communicated
                      with my throughout the process of my case.
                    </p>
                  </div>
                  <div className={styles.name}>
                    <h3>
                      Brian A. <span>Las Vegas</span>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <div className={styles.text}>
                    <p>
                      Michael Sanchez got me more money than I thought I would ever get. He's confident and a
                      shark yet kind with his clients. I highly recommend.
                    </p>
                  </div>
                  <div className={styles.name}>
                    <h3>
                      Giovanni P. <span>Las Vegas</span>
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>
                  <div className={styles.text}>
                    <p>
                      My fiancé had a successful case with this firm. Under the circumstances, Mendez &
                      Sanchez, attorneys and staff made this a pleasant experience. Staff was respectful,
                      genuine, and all around a great fit for the case and my fiancé. This firm comes highly
                      recommended!
                    </p>
                  </div>
                  <div className={styles.name}>
                    <h3>
                      Danielle S. <span>Las Vegas</span>
                    </h3>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.direct}>
                <Button className={cx(styles.slideControls, styles.prev)}>
                  <FontAwesomeIcon icon={faChevronLeft} className="fas text-white" />
                </Button>
                <Button className={cx(styles.slideControls, styles.next)}>
                  <FontAwesomeIcon icon={faChevronRight} className="fas text-white" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <span className={`${styles.quote} moving_effect`} data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </Container>
    </div>
  );
};

export default Testimonial;
