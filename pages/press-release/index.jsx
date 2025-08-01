import { Container, Row, Col, Badge } from 'react-bootstrap';
import styles from './index.module.scss';
import Image from 'next/image';
import bannerImg from '@images/intro/ms-banner.webp';
import Seo from '@/components/Seo';

const post = {
  title: 'Confidential Settlement Reached in Chino Intersection Collision Lawsuit | Mendez & Sanchez APC',
  description:
    'Mendez & Sanchez announces a confidential settlement in a serious personal injury lawsuit from a Chino intersection collision.',
  mainImage: {
    src: bannerImg.src,
    alt: 'Times staff writer Kevin Rector'
  },
  keywords: [
    'personal injury lawsuit',
    'Chino car accident',
    'Mendez & Sanchez',
    'intersection collision',
    'confidential settlement'
  ],
  date: '2025-07-23T08:27:00-08:00',
  articleSection: 'Firm Update'
};

export default function PressRelease() {
  return (
    <>
      <Seo
        title={`${post.title} | Mendez & Sanchez APC`}
        description={post.description}
        ogImage={post.mainImage.src}
        keywords={post.keywords.join(', ')}
        canonicalUrl={`https://www.mendezsanchezlaw.com/press-release`}
        noIndex={false}
      >
        <link rel="preload" as="image" href={require('@images/hero/hero.webp')} type="image/webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.mendezsanchezlaw.com/press-release`
            },
            headline: post.title,
            description: post.description,
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
      <section className={styles.press}>
        <Container className={styles.container}>
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Category Badge */}
              <div className="mb-3">
                <Badge className={styles.categoryBadge}>Firm Update</Badge>
              </div>

              {/* Title */}
              <h1 className={styles.title}>
                Confidential Settlement Reached in Chino Intersection Collision Lawsuit
              </h1>

              {/* Featured Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={bannerImg}
                  alt="Times staff writer Kevin Rector"
                  className={styles.image}
                  placeholder="blur"
                />
              </div>

              {/* Subhead + Date */}
              <p className={styles.date}>July 23, 2025 8:27 AM PT</p>
              <p className={styles.subhead}>
                The law firm of Mendez &amp; Sanchez, A.P.C. is pleased to announce that a confidential
                settlement has been reached in a personal injury lawsuit filed by a man who suffered serious
                injuries from a collision. The case stemmed from a serious two-vehicle collision that occurred
                in broad daylight at a Chino, CA intersection on March 24, 2022.
              </p>

              {/* Body */}
              <article className={styles.body}>
                <p>
                  According to the complaint filed in San Bernardino County Superior Court, the plaintiff was
                  driving lawfully eastbound on Schaefer Avenue when a flatbed truck operated by an employee
                  of Coast Aluminum made an unsafe left turn in front of him at the intersection with Benson
                  Avenue. The resulting T-bone crash caused major damage to both vehicles and left the
                  plaintiff with serious physical and emotional injuries.
                </p>

                <p>
                  The lawsuit alleged that the negligent driver who was operating the commercial vehicle
                  caused the crash, and that Coast Aluminum negligently entrusted him with its operation.
                </p>

                <p>
                  Mendez &amp; Sanchez’s client suffered significant injuries and required ongoing medical
                  treatment as a result of the crash. The case has now been resolved to the satisfaction of
                  all parties.
                </p>

                <p>
                  “This was a terrifying and traumatic event for our client,” said Alex D. Guerrero, partner
                  at Mendez &amp; Sanchez, A.P.C. “He did everything right and was simply driving through an
                  intersection when a commercial vehicle turned directly into his path. We’re pleased that he
                  can now focus on healing and moving forward with his life.”
                </p>

                <p>
                  Because of the confidential nature of the settlement, specific terms will not be disclosed.
                </p>

                <p>The case is San Bernardino Superior Court, Case No. CIVSB2215872.</p>
              </article>
              <h2>About Mendez &amp; Sanchez, A.P.C.</h2>
              <p className={styles.subhead}>
                The law firm of Mendez &amp; Sanchez, A.P.C. is pleased to announce that a confidential
                settlement has been reached in a personal injury lawsuit filed by a man who suffered serious
                injuries from a collision. The case stemmed from a serious two-vehicle collision that occurred
                in broad daylight at a Chino, CA intersection on March 24, 2022.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

PressRelease.darkLayout = true;
