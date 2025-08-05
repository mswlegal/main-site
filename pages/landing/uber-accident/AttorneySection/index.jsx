import React from 'react';
import TeamCarousel from '@/components/Team/TeamCarousel';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';

const AttorneySection = () => {
  return (
    <section className={styles.teamSection}>
      <div className="container text-center">
        <h2 className={styles.heading}>Meet Our Leading Attorneys</h2>
        <p className={styles.subheading}>
          Mendez & Sanchez’s legal team is trusted across California and Nevada to fight for victims of Uber
          accidents
        </p>
      </div>

      <Container fluid>
        <TeamCarousel />
      </Container>
    </section>
  );
};

export default AttorneySection;
