import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './legal.module.scss';
import cx from 'classnames';

function Disclaimer() {
  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col>
              <h1>Disclaimer</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col>
              <p>
                The information found on this website is for general informational, educational, and
                advertising purposes only. Any information found on this website does not constitute legal
                advice or a direct solicitation of clients, nor does it create an attorney-client relationship
                between the reader/user and Mendez and Sanchez APC.
                <br />
                <br />
                Any case result information provided on any portion of this website, whether individual case
                results or in the aggregate, should not be construed or understood as a promise of any
                particular result in a future case. Because the results obtained in specific cases depend on a
                variety of factors unique to each case, past case results do not guarantee or predict a
                similar result in future cases. Professional legal counsel should be sought for specific
                advice relevant to your circumstances. Do not send any confidential information until an
                attorney-client relationship has been established through direct communication with an
                attorney and subsequent mutual written agreement that representation of you would be
                appropriate and acceptable. For more information about our website’s legal policies or to
                schedule a free case evaluation with an attorney, contact us online or call{' '}
                <a href="tel:+13238381444">(323) 838-1444</a>
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Disclaimer;
