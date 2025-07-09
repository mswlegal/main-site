import Card from 'react-bootstrap/Card';
import styles from './index.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { IsInViewProvider } from '@/hooks/viewportListener';

function Team(props) {
  const { className, name, role, description, image } = props;
  return (
    <Card className={cx(styles.card, 'bg-dark text-white', className)}>
      <Card.Img className={styles.image} src={image} alt="Card image" />
      <Card.ImgOverlay className={styles.overlay}>
        <IsInViewProvider>
          <div className={styles.content}>
            <Card.Title>{name}</Card.Title>
            <span className={styles.role}>{role}</span>
            <Card.Text>{description}</Card.Text>
          </div>
        </IsInViewProvider>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Team;

Team.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
