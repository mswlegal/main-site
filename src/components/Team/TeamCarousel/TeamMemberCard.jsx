import React from 'react';
import styles from './index.module.scss';
import { Card } from 'react-bootstrap';
import cx from 'classnames';

const TeamMemberCard = ({ image, name, title, description }) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image.src} className={styles.cardImg} />
      <Card.ImgOverlay className={styles.overlay}>
        <Card.Body className={styles['card-body']}>
          <Card.Title className={styles['card-title']}>{name}</Card.Title>
          <Card.Subtitle className={cx(styles['card-subtitle'], 'mb-2 text-muted')}>{title}</Card.Subtitle>
          <Card.Text className={styles['card-text']}>{description}</Card.Text>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TeamMemberCard;
