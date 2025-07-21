import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import Seo from '@/components/Seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import ModalForm from '@/components/Forms/ModalForm';
import MainForm from '@/components/Forms/MainForm';

function ContactPage() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const [openForm, setOpenForm] = React.useState(false);
  const mainImage = require('@images/posts/pain-and-suffering.webp').default.src;

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: currentUrl
        })
        .catch((err) => console.error('Error sharing:', err));
    } else {
      // fallback: copy link to clipboard
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  function toggleForm() {
    setOpenForm(!openForm);
  }

  return (
    <>
      <Seo
        title="Guide to Pain and Suffering Lawsuits | Mendez & Sanchez APC"
        description="Learn how to bring a lawsuit for pain and suffering in California or Nevada. Discover types of accidents, damages you can claim, and how Mendez & Sanchez APC fights for your compensation."
        ogImage={mainImage}
        keywords="pain and suffering lawsuit, personal injury compensation, non-economic damages, California injury claims, Nevada injury law, car accident pain and suffering, slip and fall claims, wrongful death damages, emotional distress claims, Mendez & Sanchez law"
        noIndex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.mendezsanchezlaw.com/post/bringing-a-lawsuit-for-pain-and-suffering'
            },
            headline: 'Guide to Pain and Suffering Lawsuits | Mendez & Sanchez APC',
            description:
              'Learn how to bring a lawsuit for pain and suffering in California or Nevada. Discover types of accidents, damages you can claim, and how Mendez & Sanchez APC fights for your compensation.',
            image: `https://www.mendezsanchezlaw.com${mainImage}`,
            author: {
              '@type': 'Organization',
              name: 'Mendez & Sanchez APC',
              url: 'https://www.mendezsanchezlaw.com/'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Mendez & Sanchez APC',
              logo: {
                '@type': 'ImageObject',
                url: `https://www.mendezsanchezlaw.com${require('@images/logo/logo-dark.webp').default.src}`
              }
            },
            datePublished: '2024-12-18',
            dateModified: '2024-12-18',
            articleSection: 'Personal Injuries',
            keywords: [
              'pain and suffering lawsuit',
              'personal injury compensation',
              'non-economic damages',
              'California injury claims',
              'Nevada injury law',
              'car accident pain and suffering',
              'slip and fall claims',
              'wrongful death damages',
              'emotional distress claims',
              'Mendez & Sanchez law'
            ]
          })}
        </script>
      </Seo>

      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'text-center justify-content-center')}>
            <Col lg={9} xs={12}>
              <IsInViewProvider>
                <h1>
                  A Guide to Bringing a Lawsuit for <span>Pain and Suffering</span>
                </h1>
              </IsInViewProvider>

              <IsInViewProvider>
                <p className="mt-4">
                  If you’ve been injured in an accident, don’t wait to take action. Mendez & Sanchez APC is
                  ready to help you pursue the justice and compensation you deserve in California or Nevada.
                  Fill out the form below or call us today for a free, no-obligation consultation. One of our
                  experienced attorneys will review your case and reach out promptly.
                </p>
              </IsInViewProvider>
            </Col>
            {/* <Col lg={5} xs={12}>
              <Form />
            </Col> */}
          </Row>
        </Container>
      </section>

      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <IsInViewProvider center>
            <Row className={styles.row}>
              <Col lg={8} xs={12}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={mainImage} />
                  <Card.Body>
                    <Row className={cx(styles['post-meta'], 'align-items-center')}>
                      <Col xs="auto" className="d-flex align-items-center me-3">
                        <FontAwesomeIcon icon={faUser} className="me-1 text-danger" />
                        <span>By Admin</span>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center me-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-1 text-danger" />
                        <span>18 Dec, 2024</span>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTag} className="me-1 text-danger" />
                        <span>Personal Injuries</span>
                      </Col>
                    </Row>
                    <div>
                      <p>
                        Injury treatment can cost tens of thousands or even hundreds of thousands of dollars,
                        and it could hinder your ability to earn money through work. The costs of an injury,
                        though, can go beyond money.
                      </p>
                      <p>
                        Injury victims and their families may experience severe emotional distress as a result
                        of their injuries. The state of California’s lawmakers allow personal injury claimants
                        to seek compensation for the quality of life repercussions of their injuries because
                        the psychological effects of injuries can be so severe.
                      </p>
                      <p>
                        Suppose someone else’s carelessness or negligence caused an accident that injured you.
                        In that case, you could then make a claim for compensation to pay both the costs of
                        your injury and its actual but immeasurable effects.&nbsp;
                      </p>
                      <p>
                        How much compensation you should seek can be decided by and pursued on your behalf by
                        an expert personal injury attorney. Read on to discover more about how the law can
                        assist you in obtaining the compensation you are due.
                      </p>

                      <h3>
                        <strong>Elements That Make Up Suffering and Pain</strong>
                      </h3>
                      <p>
                        The Legal Information Institute at Cornell Law School defines pain and suffering as
                        the physical discomfort and emotional misery that people frequently experience as a
                        result of an accident.
                      </p>
                      <p>
                        These psychological effects, which are mostly the early, excruciating pain of the
                        injury or its treatment, may only endure momentarily.&nbsp;
                      </p>
                      <p>
                        However, other injuries, such as those to the brain or spinal cord, can leave victims
                        with lifelong anguish and suffering as they learn to live with drastically altered
                        capacity for earning a living and maintaining independence.
                      </p>
                      <p>
                        Through the personal injury claims process, injured people can be compensated for a
                        variety of pain and suffering in the form of non-economic damages. These damages are
                        not out-of-pocket costs and are not solely based on the price of the goods and
                        services required to treat the condition.&nbsp;
                      </p>
                      <p>
                        Instead, you apply a formula to determine how much non-economic damage you can receive
                        for the effects of your injuries.
                      </p>

                      <h3>
                        <strong>Types of Accidents That Cause Pain and Suffering</strong>
                      </h3>
                      <p>
                        Pain and suffering can be brought on by almost any kind of accident that leaves
                        victims hurt, including the following:
                      </p>
                      <ul>
                        <li>
                          <strong>Accidents Involving Vehicles</strong>
                        </li>
                      </ul>
                      <p>
                        Cars, large trucks, buses, taxis, ride-sharing services, railroads, bicycles,
                        scooters, pedestrians, airplanes, and boats are included in this list.
                      </p>
                      <ul>
                        <li>
                          <strong>Medical Malpractice</strong>
                        </li>
                      </ul>
                      <p>
                        Medical malpractice is defined as carelessness committed by a healthcare professional,
                        such as a doctor, nurse, dentist, pharmacist, or chiropractor, in a medical context.
                      </p>
                      <ul>
                        <li>
                          <strong>Premises Liability Accidents</strong>
                        </li>
                      </ul>
                      <p>
                        These are accidents where someone was hurt because of a dangerous property feature on
                        a private, public, or commercial property that the owner of the property knew about or
                        had reason to know about but did not take any action to eliminate or warn others of
                        through a clearly visible warning sign.&nbsp;
                      </p>
                      <p>
                        The most frequent type of premises liability suit is a slip and fall incident.
                        Premises liability, however, also covers other kinds of mishaps, such as dog attacks,
                        escalator or elevator accidents, swimming pool mishaps, and careless security.
                      </p>
                      <ul>
                        <li>
                          <strong>Product Liability Accidents</strong>
                        </li>
                      </ul>
                      <p>
                        These involve accidents brought on by a faulty product. Foods and drugs are among the
                        most popular products that give rise to a product liability claim.&nbsp;
                      </p>
                      <p>
                        Appliances, toys for children, clothing for children, lawnmowers, and other elements
                        of equipment are other common products with faults that cause harm to consumers.
                      </p>
                      <ul>
                        <li>
                          <strong>Nursing Home Neglect or Abuse</strong>
                        </li>
                      </ul>
                      <p>
                        In the state, nursing homes with and without licenses are home to hundreds of
                        thousands of people. Most of them are senior citizens who are vulnerable to abuse
                        because of dementia or other mental or physical health conditions.&nbsp;
                      </p>
                      <p>
                        Neglect is failing to provide for a nursing home resident’s basic needs. It frequently
                        happens due to staffing shortages at these facilities, which can leave insufficient
                        workers to supervise residents and attend to their requirements adequately.
                      </p>
                      <ul>
                        <li>
                          <strong>Wrongful Death</strong>
                        </li>
                      </ul>
                      <p>
                        According to California law, a death brought on by someone else’s negligence or
                        wrongdoing is a wrongful death.&nbsp;
                      </p>
                      <p>
                        The deceased’s family members can seek compensation for non-economic damages, such as
                        the loss of the decedent’s affection, companionship, care, protection, and
                        support.&nbsp;
                      </p>
                      <p>
                        They can seek compensation when they lose a loved one in a California accident brought
                        on by someone else’s irresponsible or reckless behavior.
                      </p>
                      <p>
                        Unfortunately, accidents aren’t the only reason for injuries brought on by another
                        person’s conduct.&nbsp;
                      </p>
                      <p>
                        California’s personal injury claims procedure also enables victims of deliberate harm,
                        such as sexual assault or abuse, to seek redress and damages. These people may also
                        seek pain and suffering reimbursement.
                      </p>

                      <h3>
                        <strong>Different Forms of Damages for Pain and Suffering You Can Sue</strong>
                      </h3>
                      <p>
                        Many detrimental effects of injuries are included in pain and suffering damages, such
                        as the following:
                      </p>

                      <h4>
                        <strong>1. Distress and Suffering</strong>
                      </h4>
                      <p>
                        The widespread moniker for non-economic damages suggests that physical pain and
                        suffering are among the most noticeable effects.&nbsp;
                      </p>
                      <p>
                        This can include the discomfort brought on by the injury, any particularly unpleasant
                        medical procedures needed to aid in your rehabilitation, and any negative effects
                        brought on by injury complications.
                      </p>
                      <p>
                        A high likelihood of complications is produced by some injuries, such as spinal cord
                        and traumatic brain injuries. These complications can occasionally be even more severe
                        and life-threatening than the primary injury.
                      </p>

                      <h4>
                        <strong>2. Emotional Anxiety</strong>
                      </h4>
                      <p>
                        It refers to the psychological trauma that the victim experiences as a result of the
                        injury and causes feelings of fear, worry, loss of sleep, despair, and shame.
                        Emotional discomfort is a prevalent sort of non-economic expense.
                      </p>

                      <h4>
                        <strong>3. Loss Of Consortium</strong>
                      </h4>
                      <p>
                        Loss of consortium damage results from the repeated loss of physical intimacy and
                        companionship experienced following a serious injury. This is asserted on behalf of
                        the wounded person’s spouse or domestic partner.
                      </p>

                      <h4>
                        <strong>4. Loss of Life’s Enjoyment</strong>
                      </h4>
                      <p>
                        Injured persons frequently seek this form of harm if their infirmities prevent them
                        from engaging in the hobbies and activities that they loved before the accident.
                        Assume that you once enjoyed hiking and are now unable to do so due to your
                        ailments.&nbsp;
                      </p>
                      <p>
                        In that case, you have the right to compensation for being deprived of the opportunity
                        to pursue a passion that would have improved the quality and enjoyment of your life.
                      </p>

                      <h3>
                        <strong>Damages for Wrongful Death, Pain, and Suffering</strong>
                      </h3>
                      <p>
                        Families of those who have passed away because of someone else’s negligence,
                        recklessness, or even malicious act may pursue pain and suffering damages, including
                        the loss of love, care, protection, direction, nurturing, and support.&nbsp;
                      </p>

                      <h3>
                        <strong>Showing Evidence of Pain and Suffering</strong>
                      </h3>
                      <p>
                        Medical documents or bills that detail the extent of the medical care you need to
                        receive to heal your injuries can be used as proof of your pain and suffering.
                      </p>
                      <p>
                        Videos comparing your level of activity before the accident to your level after the
                        accident are required, as well as photographs of the property damage or bodily
                        injuries that indicate the severity of the injury.
                      </p>
                      <p>
                        You will require copies of any medical or mental health counselors’ notes, the
                        testimony of family, friends, and coworkers, and the testimony of experts who can
                        describe the kinds of impacts that typically result in injuries similar to yours.
                      </p>
                      <p>
                        You will also need documentation of the lost time from work, such as time cards or a
                        physician’s directive that the patient should not work.
                      </p>

                      <h3>
                        <strong>Conclusion</strong>
                      </h3>
                      <p>
                        You can still sue for pain and suffering damages even without an injury. Plaintiffs
                        may seek non-economic damages if they can demonstrate that they endured emotional
                        distress as a result of an accident in which they did not sustain serious injuries.
                      </p>
                      <p>
                        These claims typically rely on the testimony of a mental health professional who can
                        attest that the claimant experiences emotional distress symptoms, including insomnia,
                        anxiety, or symptoms of post-traumatic stress disorder.
                      </p>
                      <p>
                        If you’re seeking a trusted{' '}
                        <a href="/about-your-lawyers">personal injury lawyer in Los Angeles</a>, Mendez &amp;
                        Sanchez Law is ready to step up and handle your case.&nbsp;
                      </p>
                      <p>
                        While we pursue the just recompense for you, our team is available to guide you
                        through the complex legal system. Contact us today for your personal injury, auto
                        accident, workers’ compensation, or other legal needs.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} xs={12}>
                <div className={styles.sticky}>
                  <div className={styles['share-section']}>
                    <span className={styles.label}>Share:</span>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['icon-link']}
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['icon-link']}
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['icon-link']}
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <button
                      onClick={handleNativeShare}
                      className={styles['icon-link']}
                      aria-label="Share link"
                    >
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </button>
                  </div>
                  <div className="d-md-block d-none">
                    <MainForm className={styles.form} />
                  </div>
                </div>
              </Col>
            </Row>
          </IsInViewProvider>
          <ModalForm show={openForm} setShow={setOpenForm} />
          <Button as="a" className={cx(styles.button, 'd-md-none d-block')} onClick={() => toggleForm()}>
            <span className="text-capitalize">Start your free case review</span>
          </Button>
        </Container>
      </section>
    </>
  );
}

export default ContactPage;
