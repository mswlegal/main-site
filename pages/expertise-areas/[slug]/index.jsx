import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './index.module.scss';
import MainForm from '@/components/Forms/MainForm';
import ModalForm from '@/components/Forms/ModalForm';
import Seo from '@/components/Seo';
import { IsInViewProvider } from '@/hooks/viewportListener';
import { extractKeywordsFromRichText } from '@/utilities';

function ExpertisePage({ expertise }) {
  const [currentUrl, setCurrentUrl] = React.useState('');
  const [openForm, setOpenForm] = React.useState(false);

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: currentUrl
        })
        .catch((err) => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  function toggleForm() {
    setOpenForm(!openForm);
  }

  if (!expertise) return <p>Loading...</p>;

  return (
    <>
      <Seo
        title={`${expertise.title} | Mendez & Sanchez APC`}
        description={expertise.description}
        ogImage={expertise.mainImage.src}
        keywords={expertise.keywords.join(', ')}
        noIndex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: expertise.title,
            name: expertise.title,
            description: expertise.description,
            provider: {
              '@type': 'LegalService',
              name: 'Mendez & Sanchez APC',
              url: 'https://www.mendezsanchezlaw.com/'
            },
            areaServed: 'California and Nevada',
            url: `https://www.mendezsanchezlaw.com/expertise/${expertise.slug}`,
            keywords: expertise.keywords
          })}
        </script>
      </Seo>

      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'text-center justify-content-center')}>
            <Col lg={9} xs={12}>
              <IsInViewProvider>
                <h1 dangerouslySetInnerHTML={{ __html: expertise.header || expertise.title }} />
              </IsInViewProvider>

              <IsInViewProvider>
                <p className="mt-4 mb-5">
                  Whether you've been injured in an accident, are dealing with a personal injury claim, or
                  facing another legal issue, Mendez & Sanchez APC is here to fight for you. We handle a wide
                  range of cases and focus on one thing—<strong>getting results</strong>. Our goal is to win
                  the maximum compensation you deserve and help you get the justice you're owed in California
                  or Nevada. Contact us today for a <strong>free, no-obligation consultation.</strong>
                </p>
              </IsInViewProvider>

              <Button
                as="a"
                href="tel:+132383814444"
                className={cx(styles.button, 'd-md-none d-inline-block')}
              >
                <span className="text-capitalize">Call Us Now</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <IsInViewProvider center>
            <Row className={styles.row}>
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
              <Col lg={8} xs={12}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={expertise.mainImage.src} />
                  <Card.Body>
                    <Row className={cx(styles['post-meta'], 'align-items-center')}>
                      <Col md="auto" xs={6} className="d-flex align-items-center me-md-3">
                        <FontAwesomeIcon icon={faUser} className="me-1 text-danger" />
                        <span>By Admin</span>
                      </Col>
                      <Col md="auto" xs={6} className="d-flex align-items-center me-md-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-1 text-danger" />
                        <span>{expertise.date}</span>
                      </Col>
                      <Col md="auto" xs={6} className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTag} className="me-1 text-danger" />
                        <span>{expertise.articleSection}</span>
                      </Col>
                    </Row>
                    <div dangerouslySetInnerHTML={{ __html: expertise.content }} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </IsInViewProvider>
          <ModalForm show={openForm} setShow={setOpenForm} />
          <Button
            className={cx(styles.button, styles.floatingButton, 'd-md-none d-block')}
            onClick={() => toggleForm()}
          >
            <span className="text-capitalize">Start your free case review</span>
          </Button>
        </Container>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/webflow-expertise`);
  const data = await res.json();
  const items = data.items;

  const item = items.find((entry) => entry.fieldData.slug === params.slug);
  if (!item) return { notFound: true };

  const expertise = {
    title: item.fieldData.name,
    slug: item.fieldData.slug,
    description: item.fieldData['meta-discription'] || '',
    content: [
      item.fieldData['expertise-long-description'],
      item.fieldData['expertise-long-description-2'],
      item.fieldData['expertise-long-description-3']
    ]
      .filter(Boolean)
      .join(''),
    date: new Date(item.createdOn).toLocaleDateString(),
    keywords: [item.fieldData.name, 'Personal Injury', 'Accident Lawyer', 'Mendez & Sanchez', 'Injury Claim'],
    articleSection: 'Legal Expertise',
    mainImage: {
      src: item.fieldData['practice-photo']?.url || '',
      alt: item.fieldData['alt-text-for-expertise-photo'] || ''
    }
  };

  return {
    props: { expertise },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/webflow-expertise`);
  const data = await res.json();
  const items = data.items.filter((entry) => !entry.isDraft && !entry.isArchived);

  const paths = items.map((item) => ({
    params: { slug: item.fieldData.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export default ExpertisePage;
