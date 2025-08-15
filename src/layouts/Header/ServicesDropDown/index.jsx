import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Container, NavDropdown, Card } from 'react-bootstrap';
import cx from 'classnames';

const SERVICE_ITEMS = [
  {
    title: 'Motor Vehicle Accidents',
    copy: 'Recent Settlement Won: <strong>$8 Million</strong>',
    backgroundImage: require('@images/portfolio/car-accident.webp').default.src,
    path: '/expertise-areas/personal-injury'
  },
  {
    title: 'Traumatic Brain Injury',
    copy: 'Recent Settlement Won: <strong>$10 Million</strong>',
    backgroundImage: require('@images/portfolio/brain-injury.webp').default.src,
    path: '/expertise-areas/traumatic-brain-injury'
  },
  {
    title: 'Wrongful Death',
    copy: 'Recent Settlement Won: <strong>$4.9 Million</strong>',
    backgroundImage: require('@images/portfolio/wrongful-death.webp').default.src,
    path: '/expertise-areas/wrongful-death'
  },
  {
    title: 'Truck Accidents',
    copy: 'Recent Settlement Won: <strong>$14 Million</strong>',
    backgroundImage: require('@images/portfolio/truck-accidents.webp').default.src,
    path: '/expertise-areas/truck-accident'
  },
  {
    title: 'Slip and Fall',
    copy: 'Recent Settlement Won: <strong>$10 Million</strong>',
    backgroundImage: require('@images/portfolio/slip-and-fall.webp').default.src,
    path: '/expertise-areas/slip-and-fall'
  },
  {
    title: 'Train Accidents',
    copy: 'Highest Settlement Won: <strong>$5 Million</strong>',
    backgroundImage: require('@images/portfolio/train-accidents.webp').default.src,
    path: '/expertise-areas/train-accident'
  }
];

// Scroll Arrow Button Component
const ScrollArrowButton = ({ direction, onClick }) => (
  <button
    className={cx(styles.arrowButton, direction === 'right' && styles.right, 'd-none d-md-block')}
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    <FontAwesomeIcon icon={faChevronRight} rotation={direction === 'left' ? 180 : undefined} />
  </button>
);

const ServicesDropDown = ({ onDropDownShow, onChangeRoute, forceClose }) => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setServicesDropdownOpen((prev) => !prev);
  }, []);

  const handleChangeRoute = (path) => {
    if (onChangeRoute) onChangeRoute(path);
  };

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (onDropDownShow) onDropDownShow(servicesDropdownOpen);
  }, [onDropDownShow, servicesDropdownOpen]);

  useEffect(() => {
    if (forceClose) setServicesDropdownOpen(false);
  }, [forceClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const dropdownElement = document.querySelector(`.${styles['custom-dropdown']}`);
      if (dropdownElement && !dropdownElement.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      window.addEventListener('scroll', () => setServicesDropdownOpen(false), { passive: true });
      window.addEventListener('resize', () => setServicesDropdownOpen(false));
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  return (
    <NavDropdown
      title={
        <span className={styles.dropdownTitle} onClick={() => toggleDropdown()}>
          Services <FontAwesomeIcon icon={faChevronDown} className={styles.caretIcon} />
        </span>
      }
      show={servicesDropdownOpen}
      className={styles['custom-dropdown']}
    >
      {servicesDropdownOpen && (
        <Container fluid="sm" className={cx(styles.container, 'd-md-flex d-block position-relative')}>
          <ScrollArrowButton direction="left" onClick={() => handleScroll('left')} />

          <div
            ref={scrollContainerRef}
            className={cx(styles.scrollContainer, 'd-flex overflow-auto flex-md-row flex-column')}
          >
            {SERVICE_ITEMS.map((item, index) => (
              <NavDropdown.Item
                key={`service-item-${index}`}
                onClick={() => handleChangeRoute(item.path)}
                style={{ animationDelay: `${index * 0.1}s` }}
                className={styles.dropdownItem}
              >
                <Card className={cx(styles.card, 'bg-dark text-white d-md-block d-none')}>
                  <Card.Img src={item.backgroundImage} alt={item.title} />
                  <Card.ImgOverlay>
                    <Card.Text dangerouslySetInnerHTML={{ __html: item.copy }} />
                    <Card.Title>{item.title}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                <span className="d-md-none d-block">
                  {item.title}{' '}
                  <FontAwesomeIcon icon={faChevronRight} className={cx(styles.caretIcon, 'mt-n1')} />
                </span>
              </NavDropdown.Item>
            ))}
          </div>

          <ScrollArrowButton direction="right" onClick={() => handleScroll('right')} />
        </Container>
      )}
    </NavDropdown>
  );
};

ServicesDropDown.propTypes = {
  onDropDownShow: PropTypes.func,
  onChangeRoute: PropTypes.func,
  forceClose: PropTypes.bool
};

export default ServicesDropDown;
