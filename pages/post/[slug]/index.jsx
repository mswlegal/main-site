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
import posts from '@/posts/staticPosts';

function PostPage({ post }) {
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

  if (!post) return <p>Loading...</p>; // Just in case the post is not found
  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        ogImage={post.mainImage.src}
        keywords={post.keywords.join(', ')}
        noIndex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.mendezsanchezlaw.com/post/${post.slug}`
            },
            headline: post.title,
            description: 'Learn how to bring a lawsuit for pain and suffering...',
            image: `https://www.mendezsanchezlaw.com${post.mainImage.src}`,
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
            datePublished: post.date,
            dateModified: post.date,
            articleSection: post.articleSection,
            keywords: post.keywords
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
                  Fill out the form below or call us today for a free, no-obligation consultation.
                </p>
              </IsInViewProvider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <IsInViewProvider center>
            <Row className={styles.row}>
              <Col lg={8} xs={12}>
                <Card className={styles.card}>
                  <Card.Img variant="top" src={post.mainImage.src} />
                  <Card.Body>
                    <Row className={cx(styles['post-meta'], 'align-items-center')}>
                      <Col xs="auto" className="d-flex align-items-center me-3">
                        <FontAwesomeIcon icon={faUser} className="me-1 text-danger" />
                        <span>By Admin</span>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center me-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-1 text-danger" />
                        <span>{post.date}</span>
                      </Col>
                      <Col xs="auto" className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faTag} className="me-1 text-danger" />
                        <span>Personal Injuries</span>
                      </Col>
                    </Row>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
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

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false // Or true/`blocking` for fallback loading
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      post
    }
  };
}

export default PostPage;
