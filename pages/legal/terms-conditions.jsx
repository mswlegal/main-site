import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './legal.module.scss';
import cx from 'classnames';

function PrivacyPolicy() {
  return (
    <>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col>
              <h1>Terms and Conditions</h1>
              <p>
                <strong>Effective Date:</strong> January 01 2025
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'justify-content-center')}>
            <Col md={10} xs={12}>
              <h3>1. No Attorney-Client Relationship</h3>
              <p>
                Use of this website does <strong>not</strong> create an attorney-client relationship between
                you and Mendez & Sanchez APC. Contacting us through the website or submitting information does
                not establish such a relationship unless and until a formal written agreement is signed by
                both parties.
              </p>

              <h3>2. Information Is Not Legal Advice</h3>
              <p>
                The content on this website is provided for general informational purposes only. It is not
                intended to be legal advice, and you should not act upon any information without seeking
                professional counsel. Laws vary by jurisdiction and may change over time.
              </p>

              <h3>3. Confidentiality</h3>
              <p>
                You should not send us confidential or sensitive information through this website unless you
                are an existing client and instructed to do so. Unsolicited communication does not create a
                duty of confidentiality or an attorney-client relationship.
              </p>

              <h3>4. Intellectual Property</h3>
              <p>
                All materials on this website, including text, graphics, logos, and images, are the property
                of Mendez & Sanchez APC or licensed to us. You may not copy, reproduce, modify, distribute, or
                display any content without prior written consent.
              </p>

              <h3>5. Links to Third-Party Websites</h3>
              <p>
                Our website may contain links to third-party websites for your convenience. We do not endorse
                or control those websites and are not responsible for their content, privacy practices, or
                terms of use.
              </p>

              <h3>6. No Guarantee of Results</h3>
              <p>
                Past outcomes do not guarantee future results. Descriptions of successful outcomes on this
                site are for illustrative purposes and do not constitute a promise or guarantee regarding your
                legal matter.
              </p>

              <h3>7. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Mendez & Sanchez APC shall not be liable for any
                damages arising out of or related to your use of this website or any linked third-party site.
              </p>

              <h3>8. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of the State of California, without regard
                to its conflict of law provisions. Any disputes shall be resolved in the courts located in Los
                Angeles County, California.
              </p>

              <h3>9. Changes to Terms</h3>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes become
                effective immediately upon posting. Your continued use of the website constitutes your
                acceptance of the revised terms.
              </p>

              <h3>10. Contact Us</h3>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <p>
                <strong>Mendez & Sanchez APC</strong>
                <br />
                5440 E. Beverly Blvd. Los Angeles, CA 90022
                <br />
                Phone: <a href="tel:+13238381444">(323) 838-1444</a>
                <br />
                Email: <a href="mailto:info@mendezsanchezlaw.com">info@mendezsanchezlaw.com</a>
                <br />
                Website:{' '}
                <a href="https://www.mendezsanchezlaw.com" target="_blank" rel="noopener noreferrer">
                  www.mendezsanchezlaw.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
