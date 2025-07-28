import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './index.module.scss';
import { IsInViewProvider } from '../../hooks/viewportListener';
import ModalForm from '../Forms/ModalForm';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Services = () => {
  const scrollContainerRef = React.useRef(null);
  const router = useRouter();

  const items = [
    {
      title: 'Motor Vehicle Accidents',
      copy: 'Car accidents can lead to serious injuries and financial stress. Insurance companies may push you to give a recorded statement to reduce their liability. Don’t go through it alone—reach out to us today for a free consultation.',
      backgroundImage: require('../../../public/img/portfolio/car-accident.webp').default.src,
      path: '/expertise-areas/personal-injury'
    },
    {
      title: 'Traumatic Brain Injury',
      copy: 'If you or a loved one suffered a brain injury due to someone else’s negligence, contact our experienced personal injury attorneys today to discuss your case.',
      backgroundImage: require('../../../public/img/portfolio/brain-injury.webp').default.src,
      path: '/expertise-areas/traumatic-brain-injury'
    },
    {
      title: 'Wrongful Death',
      copy: "The unexpected loss of a family member is always tragic, but it can be especially difficult to cope when the death was caused by other's negligence. We are here to answer your questions and help you pursue justice and compensation",
      backgroundImage: require('../../../public/img/portfolio/wrongful-death.webp').default.src,
      path: '/expertise-areas/wrongful-death'
    },
    {
      title: 'Truck Accidents',
      copy: 'Accidents that involve 18-wheelers or semi-trucks almost always have life-changing effects. If you’ve been injured in a truck crash, your injuries are likely severe. Out truck accident lawyer can help you get the compensation you need to recover.',
      backgroundImage: require('../../../public/img/portfolio/truck-accidents.webp').default.src,
      path: '/expertise-areas/truck-accident'
    },
    {
      title: 'Slip and Fall',
      copy: 'A trip or slip and fall accident can result in broken bones, soft tissue damage, brain trauma, and many other devastating injuries. The California slip and fall attorney at our East Los Angeles office can help you fight for the compensation you need to pay for medical bills, lost income, and other damages you have suffered due to your injuries.',
      backgroundImage: require('../../../public/img/portfolio/slip-and-fall.webp').default.src,
      path: '/expertise-areas/slip-and-fall'
    },
    {
      title: 'Train Accidents',
      copy: 'Train accidents cause hundreds of deaths and thousands of injuries every year in the United States. The vast majority of these tragedies are entirely preventable. If you or a member of your family was severely injured in a train wreck involving Amtrak, Metrolink, Caltrain, or another rail system.',
      backgroundImage: require('../../../public/img/portfolio/train-accidents.webp').default.src,
      path: '/expertise-areas/train-accident'
    }
  ];

  const [openForm, setOpenForm] = React.useState(false);

  function toggleForm() {
    setOpenForm(!openForm);
  }

  function handleRouting(path) {
    if (!path) {
      toggleForm();
      return;
    }

    router.push(path);
  }

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPercentage = 0.25;
      const scrollAmount = containerWidth * scrollPercentage;

      if (direction === 'next') {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      } else if (direction === 'prev') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <section className={styles.basic_section} id="services">
      <Container fluid className={styles.services}>
        <Row>
          <Col xs={12}>
            <div className={styles.title} data-text-align="center" data-color="light">
              <span>What We Do</span>
              <h3>Our Areas of Expertise</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}></Col>
        </Row>

        <Row ref={scrollContainerRef} className={styles.pageContent}>
          {items.map((item, index) => (
            <IsInViewProvider key={`item-${index}`}>
              <Col
                xl={3}
                md={5}
                xs={10}
                className={styles.card}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                <div className={styles.content}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.copy}>{item.copy}</p>
                  <Button className={styles.btn} onClick={() => handleRouting(item.path)}>
                    Learn More
                  </Button>
                </div>
              </Col>
            </IsInViewProvider>
          ))}
        </Row>

        <Row className="d-md-block d-none">
          <Col xs={12} className="d-flex justify-content-center">
            <Button onClick={() => handleScroll('prev')} className={styles.slideControls}>
              <FontAwesomeIcon icon={faChevronLeft} className="fas text-white" />
            </Button>
            <Button onClick={() => handleScroll('next')} className={styles.slideControls}>
              <FontAwesomeIcon icon={faChevronRight} className="fas text-white" />
            </Button>
          </Col>
        </Row>
      </Container>
      <ModalForm show={openForm} setShow={setOpenForm} />
    </section>
  );
};

export default Services;
