import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faMoneyCheckDollar, faListCheck } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import styles from './index.module.scss';
import { IsInViewProvider } from '@/hooks/viewportListener';

const steps = [
  {
    icon: faListCheck,
    step: 'STEP 1',
    title: 'Free Case Review',
    description:
      'One of our attorneys will listen carefully and provide insight into your legal options, guiding you every step of the way.',
    gradientClass: styles.gradient1
  },
  {
    icon: faUserCheck,
    step: 'STEP 2',
    title: 'Personalized Legal Strategy',
    description:
      'We tailor a legal approach that aims to maximize your recovery based on the facts of your case. we handle it all while you focus on healing. ',
    gradientClass: styles.gradient2
  },
  {
    icon: faMoneyCheckDollar,
    step: 'STEP 3',
    title: 'Get Compensated!',
    description:
      'From paperwork to negotiations and court appearances, we will get you the justice and compensation you deserve',
    gradientClass: styles.gradient3
  }
];

export default function Steps() {
  return (
    <section className={styles.steps}>
      <Container className={styles.container}>
        <div className="text-center mb-5">
          <h2 className="mb-1">Our Approach</h2>
          <p className="mx-auto">
            You may be wondering what to expect once you reach out. Here's how we help from day one.
          </p>
        </div>

        <div className="position-relative">
          {/* Desktop connection line */}
          <div className={cx('d-none d-lg-block', styles.connectionLineDesktop)} />

          <Row>
            {steps.map((step, index) => (
              <Col lg={4} xs={12} key={index} className="mb-5 mb-lg-0">
                <div className={styles.stepCard}>
                  <IsInViewProvider>
                    <div className={cx(styles.iconWrapper, step.gradientClass)}>
                      <FontAwesomeIcon icon={step.icon} className="text-white fa-2x" />
                    </div>
                  </IsInViewProvider>
                  <div className="text-center px-3">
                    <Badge className={cx(styles.badge, 'text-white px-3 py-2 mb-4')}>{step.step}</Badge>
                    <h3 className="fw-bold mb-3">{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Mobile connection line */}
          <div className={cx('d-block d-lg-none', styles.connectionLineMobile)} />
        </div>
      </Container>
    </section>
  );
}
