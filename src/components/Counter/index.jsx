import ReactCounter from './ReactCounter';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Counter = () => {
  return (
    <div className={styles.basic_section}>
      <div className={styles.counter}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={3} xs={12}>
              <div className={styles.wrapper}>
                <div className={styles.value}>
                  <div className={styles.abs}>
                    <span className={styles.big}>$</span>
                    <ReactCounter end={14} />
                    <span className={styles.big}>M</span>
                  </div>
                </div>
                <div className={styles.text}>
                  <h3>Motorcycle Accidents</h3>
                </div>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className={styles.wrapper}>
                <div className={styles.value}>
                  <div className={styles.abs}>
                    <span className={styles.big}>$</span>
                    <ReactCounter end={10} />
                    <span className={styles.big}>M</span>
                  </div>
                </div>
                <div className={styles.text}>
                  <h3>Traumatic Brain Injury</h3>
                </div>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className={styles.wrapper}>
                <div className={styles.value}>
                  <div className={styles.abs}>
                    <span className={styles.big}>$</span>
                    <ReactCounter end={4.9} />
                    <span className={styles.big}>M</span>
                  </div>
                </div>
                <div className={styles.text}>
                  <h3>Wrongful Death</h3>
                </div>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className={styles.wrapper}>
                <div className={styles.value}>
                  <div className={styles.abs}>
                    <span className={styles.big}>$</span>
                    <ReactCounter end={5} />
                    <span className={styles.big}>M</span>
                  </div>
                </div>
                <div className={styles.text}>
                  <h3>Motor Vehicle Accident</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Counter;
