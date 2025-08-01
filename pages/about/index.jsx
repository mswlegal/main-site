import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import cx from 'classnames';
import { IsInViewProvider } from '@/hooks/viewportListener';
import Team from '@/components/Cards/Team';
import { partners, lawyers } from '@/data/lawyers';
import Seo from '@/components/Seo';

function AboutPage() {
  const memoizedPartners = React.useMemo(() => partners, []);
  const memoizedLawyers = React.useMemo(() => lawyers, []);

  const generateEmployeeSchema = (team) =>
    team.map((person) => ({
      '@type': 'Person',
      name: person.name,
      jobTitle: person.role,
      image: `https://www.mendezsanchezlaw.com${person.image}`
    }));

  const employees = [...generateEmployeeSchema(memoizedPartners), ...generateEmployeeSchema(memoizedLawyers)];

  const schemaMarkup = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Mendez & Sanchez APC',
    url: 'https://www.mendezsanchezlaw.com/about',
    mainEntity: {
      '@type': 'LegalService',
      name: 'Mendez & Sanchez APC',
      legalName: 'Mendez & Sanchez, A Professional Corporation',
      url: 'https://www.mendezsanchezlaw.com',
      logo: 'https://www.mendezsanchezlaw.com/img/logo/logo-light.webp',
      telephone: '+1-323-838-1444',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5440 E. Beverly Blvd.',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        postalCode: '90022',
        addressCountry: 'US'
      },
      founder: {
        '@type': 'Person',
        name: 'GianCarlo Mendez',
        jobTitle: 'Founder & Attorney',
        worksFor: {
          '@type': 'Organization',
          name: 'Mendez & Sanchez APC'
        }
      },
      employee: employees,
      description:
        'Meet the attorneys behind Mendez & Sanchez APC. Our experienced legal team is dedicated to fighting for justice for injured clients across California and Nevada.',
      areaServed: [
        { '@type': 'Place', name: 'Los Angeles' },
        { '@type': 'Place', name: 'Las Vegas' }
      ]
    }
  });
  return (
    <>
      <Seo
        title="Meet Our Legal Team | Mendez & Sanchez APC | Los Angeles Injury Attorneys"
        description="Get to know the experienced attorneys behind Mendez & Sanchez APC. Learn about our mission, values, and commitment to clients throughout Los Angeles and Las Vegas."
        ogImage={require('@images/intro/ms-banner.webp').default.src}
        keywords="Mendez & Sanchez lawyers, personal injury law firm team, Los Angeles attorneys, Giancarlo Mendez, about Mendez Sanchez, injury law team"
        canonicalUrl="https://www.mendezsanchezlaw.com/about"
        noIndex={false}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
          key="jsonld-schema"
        />
      </Seo>
      <section className={cx(styles.section, styles.header)}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col lg={10} xs={12}>
              <IsInViewProvider>
                <h1>
                  Your <span>Winning</span> Team
                </h1>
              </IsInViewProvider>
              <IsInViewProvider>
                <p>
                  Mendez & Sanchez APC is a top-rated personal injury law firm proudly serving clients in Los
                  Angeles, Pasadena, and Las Vegas, NV. Our skilled car accident attorneys and personal injury
                  lawyers are dedicated to helping victims recover the compensation and justice they deserve —
                  whether it's a car accident with no injury, a serious auto accident, or a property damage
                  claim. With over a billion dollars recovered, we’re recognized among the best car accident
                  lawyers in Los Angeles, Las Vegas, and across California. Clients turn to Mendez & Sanchez
                  for our relentless advocacy, attention to detail, and compassionate support. We offer free
                  consultations and there are no fees unless we win. If you’re looking for a trusted car
                  accident lawyer near Pasadena, CA, or need a non-injury car accident lawyer near you, we’re
                  here to fight for you every step of the way.
                </p>
              </IsInViewProvider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={cx(styles.section, styles.content)}>
        <Container className={styles.container}>
          <Row className={cx(styles.row, 'justify-content-center')}>
            <Col lg={8} xs={12} className="text-center">
              <h2 className="mb-3">Meet Your Attorneys</h2>
              <p>
                Founded on a bedrock of unwavering commitment and relentless dedication, Mendez & Sanchez APC
                stands as a testament to the vision and perseverance of its founders, Giancarlo and Michael.
              </p>
            </Col>
          </Row>
          <Row>
            {memoizedPartners.map((item, index) => (
              <Col key={`partners-${index}`} className={cx(styles.partners, 'mb-5')} lg={6} xs={12}>
                <Team name={item.name} role={item.role} description={item.description} image={item.image} />
              </Col>
            ))}
          </Row>
          <Row>
            {memoizedLawyers.map((item, index) => (
              <Col key={`lawyers-${index}`} className="mb-5" lg={4} xs={12}>
                <Team name={item.name} role={item.role} description={item.description} image={item.image} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
