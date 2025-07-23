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
import staticPosts from '@/posts/staticPosts';
import { extractKeywordsFromRichText } from '@/utilities';

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
        title={`${post.title} | Mendez & Sanchez APC`}
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
                <h1 dangerouslySetInnerHTML={{ __html: post.header || post.title }} />
              </IsInViewProvider>

              <IsInViewProvider>
                <p className="mt-4">
                  Whether you've been injured in an accident, are dealing with a personal injury claim, or
                  facing another legal issue, Mendez & Sanchez APC is here to fight for you. We handle a wide
                  range of cases and focus on one thing—<strong>getting results</strong>. Our goal is to win
                  the maximum compensation you deserve and help you get the justice you're owed in California
                  or Nevada. Contact us today for a <strong>free, no-obligation consultation.</strong>
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
                      <Col md="auto" xs={6} className="d-flex align-items-center me-md-3">
                        <FontAwesomeIcon icon={faUser} className="me-1 text-danger" />
                        <span>By Admin</span>
                      </Col>
                      <Col md="auto" xs={6} className="d-flex align-items-center me-md-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="me-1 text-danger" />
                        <span>{post.date}</span>
                      </Col>
                      <Col md="auto" xs={6} className="d-flex align-items-center">
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

export async function getStaticProps({ params }) {
  // Try to find in staticPosts first
  const staticPost = staticPosts.find((p) => p.slug === params.slug);
  if (staticPost) {
    return {
      props: {
        post: staticPost
      }
    };
  }

  // Fallback to CMS posts
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/webflow-posts`);
  const data = await res.json();
  const posts = data.items;

  const postRaw = posts.find((p) => p.fieldData.slug === params.slug);
  if (!postRaw) return { notFound: true };

  const post = {
    title: postRaw.fieldData.name,
    slug: postRaw.fieldData.slug,
    description: postRaw.fieldData['post-summary'],
    content: postRaw.fieldData['post-body'],
    date: new Date(postRaw.createdOn).toLocaleDateString(),
    keywords: extractKeywordsFromRichText(postRaw.fieldData['post-body']),
    articleSection: 'Property Damage',
    mainImage: {
      src: postRaw.fieldData['main-image']?.url || '',
      alt: postRaw.fieldData['main-image']?.alt || ''
    }
  };

  return {
    props: { post },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/webflow-posts`);
  const data = await res.json();
  const cmsPosts = data.items.filter((p) => !p.isDraft && !p.isArchived);

  const cmsPaths = cmsPosts.map((post) => ({
    params: { slug: post.fieldData.slug }
  }));

  const staticPaths = staticPosts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths: [...cmsPaths, ...staticPaths],
    fallback: false
  };
}

export default PostPage;
