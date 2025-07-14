import Image from 'next/image';
import styles from './index.module.scss';
import { call } from '../../svgImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footer_container}>
        <Row className={styles.footer_navbar_container}>
          <Col md={5} xs={12} className={styles.footer_company_details}>
            <div className={styles.footer_logo}>
              <Image
                src="/img/logo/logo-light.webp"
                alt="logo white"
                width={300}
                height={100}
                loading="eager"
                priority
              />
            </div>
            <div className={styles.disclaimer}>
              <span>
                The information found on this website is for general informational, educational, and
                advertising purposes only. Any information found on this website does not constitute legal
                advice or a direct solicitation of clients, nor does it create an attorney-client relationship
                between the reader/user and Mendez and Sanchez APC.
              </span>
            </div>
            <div className={styles.footer_icons}>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/people/Mendez-Sanchez-APC/61556121532307/!"
                    target="_blank"
                  >
                    <i className="icon-facebook-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/mendez-sanchez" target="_blank">
                    <i className="icon-linkedin-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mendezsanchezlaw/#" target="_blank">
                    <i className="icon-instagram-3" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={7} xs={12} className={styles.footer_navbar}>
            <Col md={6} xs={12} className={styles.footer_navbar_col}>
              <div className={styles.footer_content}>
                <p>
                  <strong>Los Angeles: </strong>
                  <span>
                    5440 E. Beverly Blvd.
                    <br className="d-sm-none d-block" /> Los Angeles, CA 90022
                  </span>
                </p>
                <p>
                  <strong>Pasadena:</strong>
                  <span>
                    1146 E. Green St.
                    <br className="d-sm-none d-block" /> Pasadena, CA 91106
                  </span>
                </p>
                <p>
                  <strong>Las Vegas: </strong>
                  <span>
                    300 S 4th Street Suite 825.
                    <br className="d-sm-none d-block" /> Las Vegas, Nevada 89101
                  </span>
                </p>
              </div>
            </Col>
            <Col md={3} xs={6} className={styles.footer_navbar_col}>
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <a href="tel:32383814444">{call} Los Angeles CA </a>
                </li>
                <li>
                  <a href="tel:32383814444">{call} Pasadena CA </a>
                </li>
                <li>
                  <a href="tel:7028007002">{call} Las Vegas NV</a>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6} className={styles.footer_navbar_col}>
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="/legal/terms-conditions" target="_blank" rel="noopener noreferrer">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/legal/disclaimer" target="_blank" rel="noopener noreferrer">
                    Legal Disclaimer
                  </a>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
        <div className={styles.footer_copyright}>
          <p>© 2025 Mendez & Sanchez - All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
