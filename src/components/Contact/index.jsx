import emailjs from 'emailjs-com';
import React from 'react';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [mailData, setMailData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = mailData;
  const [error, setError] = React.useState(null);

  const onChange = (e) => setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          'service_seruhwu', // service id
          'template_21aw58z', // template id
          mailData,
          'Q3pccdLZhU-mZT7tQ' // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: '', email: '', message: '' });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className={styles.basic_section} id="contact">
      <div className={styles.contact}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} xs={12}>
              <div className={styles.title} data-text-align="center" data-color="dark">
                <span>Get in Touch</span>
                <h3>Connect with Us with Confidence</h3>
              </div>
            </Col>
          </Row>

          <Row className={styles.contact_inner}>
            <Col md={6} xs={12} className={styles.left} data-wow-duration="1s">
              <div className={styles.text}>
                <p>
                  Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and
                  8:00 p.m. ET, Monday through Friday
                </p>
              </div>
              <ul>
                <li>
                  <div className={styles.list_inner}>
                    <FontAwesomeIcon icon={faPhone} className="fab" />
                    <span>Call us</span>
                    <h3>+1234 5678 9000</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.list_inner}>
                    <FontAwesomeIcon icon={faEnvelope} className="fab" />
                    <span>Email us</span>
                    <h3>
                      <a className={styles.line_anim} href="contact@mswlegal.com">
                        contact@mswlegal.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={6} xs={12} className={styles.right} data-wow-duration="1s">
              <div className={styles.fields}>
                <form
                  action="/"
                  method="post"
                  className={styles.contact_form}
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? styles.empty_notice : styles.returnmessage}
                    style={{ display: error == null ? 'none' : 'block' }}
                  >
                    <span>
                      {error
                        ? 'Please Fill Required Fields'
                        : 'Your message has been received, We will contact you soon.'}
                    </span>
                  </div>
                  <div className={styles.input_list}>
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className={styles.message_area}>
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <a className={styles.button} href="#" onClick={(e) => onSubmit(e)}>
                    <span>Submit Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="fab text-white" />
                  </a>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
