import React from 'react';
import { Container, Row, Col, Badge, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';

const benefits = [
  {
    title: 'Free Case Evaluation',
    description: 'No pressure. Just honest answers about your rights and options.'
  },
  {
    title: 'No Fees Unless We Win',
    description: 'You owe us nothing unless we recover compensation for you.'
  },
  {
    title: 'Bilingual Legal Team',
    description: 'Se habla español. We serve clients in both English and Spanish.'
  },
  {
    title: 'Licensed in CA & NV',
    description: 'We have local insight and experience across multiple jurisdictions.'
  },
  {
    title: 'Fast, Responsive Communication',
    description: 'We keep you informed at every stage of your case.'
  }
];

export default function AboutSection() {
  return (
    <section className={cx(styles.about, 'bg-white')}>
      <Container>
        <Row className="align-items-center gy-4 gy-md-0">
          {/* Left Column - Text Content */}
          <Col md={6}>
            <Badge className={cx(styles.badge, 'mb-3 px-3 py-2')}>About Us</Badge>
            <h2 className="display-5 fw-bold mb-3">Why Choose Mendez & Sanchez APC?</h2>
            <p className="text-secondary mb-4">
              When you reach out to our firm, you’re not just submitting a form — you’re taking the first step
              toward trusted, experienced legal support from attorneys who care.
            </p>
          </Col>

          {/* Right Column - Bullet Points */}
          <Col md={6}>
            <h3 className="fw-bold mb-4"> Our promise:</h3>
            <ListGroup variant="flush">
              {benefits.map(({ title, description }, idx) => (
                <IsInViewProvider key={idx}>
                  <ListGroup.Item
                    className={cx(styles['list-item'], 'border-0 ps-0 d-flex align-items-start gap-3 mb-3')}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={cx(styles.icon, 'flex-shrink-0')}
                      size="lg"
                    />
                    <p>
                      <strong>{title} - </strong>
                      <span>{description}</span>
                    </p>
                  </ListGroup.Item>
                </IsInViewProvider>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
