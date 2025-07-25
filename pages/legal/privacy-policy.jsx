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
              <h1>Privacy Policy</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'justify-content-center')}>
            <Col md={10} xs={12}>
              <h3>Privacy Policy Details</h3>
              <p>
                This privacy notice discloses the privacy practices for Mendez and Sanchez APC relating to
                www.mendezsanchezlaw.com. This privacy notice applies solely to information collected by this
                website and the usage it entails. It will notify you of the following:
              </p>
              <ul>
                <li>
                  What personally identifiable information is collected from you through the website, how it
                  is used and with whom it may be shared
                </li>
                <li>What choices are available to you regarding the use of your data</li>
                <li>The security procedures in place to protect the misuse of your information</li>
                <li>How you can correct any inaccuracies in the information</li>
              </ul>

              <h3>Information Collection, Use, and Sharing</h3>
              <p>
                We are the sole owners of the information collected on this site. We only have access to
                collect information that you voluntarily give us via email or other direct contact from you.
                We will not sell or rent this information to anyone.
              </p>
              <p>
                We will use your information to respond to you regarding the reason you contacted us. We will
                not share your information with any third party outside of our organization, other than as
                necessary to fulfill your request, e.g., to ship a contest prize.
              </p>
              <p>
                Unless you ask us not to, we may contact you via email in the future to tell you about
                specials, new products or services, or changes to this privacy policy.
              </p>

              <h3>Your Access to and Control Over Information</h3>
              <p>
                You may opt out of any future contacts from us at any time. You can do the following at any
                time by contacting us via the email address or phone number given on our website:
              </p>
              <ul>
                <li>See what data we have about you, if any</li>
                <li>Change/correct any data we have about you</li>
                <li>Have us delete any data we have about you</li>
                <li>Express any concern you have about our use of your data</li>
              </ul>

              <h3>Security</h3>
              <p>
                We take every precaution to protect your information. When you submit sensitive information
                via the website, your information is protected both online and offline.
              </p>
              <p>
                Wherever we collect sensitive information (such as credit card data), that information is
                encrypted and transmitted to us in a secure way. You can verify this by looking for a closed
                lock icon at the bottom of your web browser, or looking for "https" at the beginning of the
                address of the web page.
              </p>
              <p>
                While we use encryption to protect sensitive information transmitted online, we also protect
                your information offline. Only employees who need the information to perform a specific job
                (for example, billing or customer service) are granted access to personally identifiable
                information. The computers/servers in which we store personally identifiable information are
                kept in a secure environment.
              </p>

              <h3>Orders</h3>
              <p>
                We request information from you on our order form. This information is used for billing
                purposes and to fill your orders. If we have trouble processing an order, we'll use this
                information to contact you.
              </p>

              <h3>Cookies</h3>
              <p>
                We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard
                drive to help us improve your access to our site and identify repeat visitors.
              </p>
              <p>
                For instance, when we use a cookie to identify you, you would not have to log in a password
                more than once, thereby saving time while on our site. Cookies can also enable us to track and
                target the interests of our users to enhance the experience on our site. Usage of a cookie is
                in no way linked to any personally identifiable information on our site.
              </p>

              <h3>Sharing</h3>
              <p>
                We share aggregated demographic information with our partners and advertisers. This is not
                linked to any personal information that can identify any individual person.
              </p>

              <h3>Links</h3>
              <p>
                This website contains links to other sites. Please be aware that we are not responsible for
                the content or privacy practices of such other sites. We encourage our users to be aware when
                they leave our site and to read the privacy statements of any other site that collects
                personally identifiable information.
              </p>

              <h3>Surveys &amp; Contests</h3>
              <p>
                From time to time, our site requests information via surveys or contests. Participation in
                these surveys or contests is completely voluntary and you may choose whether or not to
                participate and therefore disclose this information.
              </p>
              <p>
                Information requested may include contact information (such as name and shipping address), and
                demographic information (such as zip code, age). Contact information will be used to notify
                the winners and award prizes. Survey information will be used for purposes of monitoring or
                improving the use and satisfaction of this site.
              </p>

              <p>
                If you feel that we are not abiding by this privacy policy, you should contact us immediately
                via telephone at <a href="tel:+13238381444">(323) 838-1444</a> or via mail:
              </p>
              <p className="text-center">
                Attn: Privacy Policy
                <br />
                5440 E. Beverly Blvd.
                <br />
                Los Angeles, CA 90022
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
