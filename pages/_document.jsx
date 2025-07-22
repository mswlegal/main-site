import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const schemaMarkup = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      '@id': 'https://www.mendezsanchezlaw.com/#legalservice',
      name: 'Mendez & Sanchez APC',
      image: 'https://www.mendezsanchezlaw.com/img/logo/logo-light.webp',
      url: 'https://www.mendezsanchezlaw.com',
      telephone: '+1-323-838-1444',
      email: 'info@mendezsanchezlaw.com',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5440 E. Beverly Blvd.',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        postalCode: '90022',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.0173976,
        longitude: -118.1576871
      },
      hasMap: 'https://www.google.com/maps/place/5440+E+Beverly+Blvd,+Los+Angeles,+CA+90022',
      openingHoursSpecification: Array(7)
        .fill({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Monday',
          opens: '00:00',
          closes: '23:59'
        })
        .map((item, idx) => ({
          ...item,
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][idx]
        })),
      areaServed: [
        { '@type': 'Place', name: 'Los Angeles' },
        { '@type': 'Place', name: 'Las Vegas' }
      ],
      sameAs: [
        'https://www.facebook.com/people/Mendez-Sanchez-APC/61556121532307/',
        'https://www.instagram.com/mendezsanchezlaw/',
        'https://www.linkedin.com/company/mendez-sanchez'
      ],
      founder: { '@type': 'Person', name: 'GianCarlo Mendez' },
      description:
        "Top-rated personal injury lawyers in Los Angeles & Las Vegas. We fight for maximum compensation in car accidents, workers' comp, and more. Free consultations and no fees unless we win."
    });

    const faqSchemaMarkup = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a personal injury lawyer cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mendez & Sanchez APC offers free consultations and works on a contingency fee basis, so you pay nothing unless we win your case.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I choose the right law firm for my case?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At Mendez & Sanchez, we recommend choosing a law firm with proven experience in your specific legal area, a strong record of successful cases, and positive client reviews. Our team specializes in personal injury law and offers free consultations to help you understand your options and feel confident in your decision.'
          }
        },
        {
          '@type': 'Question',
          name: 'What should I bring to my first meeting with a lawyer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you meet with Mendez & Sanchez, bring any relevant documents such as accident reports, medical records, correspondence, and any evidence related to your case. Preparing these materials will help us evaluate your case thoroughly and provide you with the best legal advice.'
          }
        },
        {
          '@type': 'Question',
          name: 'What should I do after a car accident?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'After a car accident, it’s important to ensure everyone’s safety and call emergency services if needed. At Mendez & Sanchez, we advise gathering as much information as possible — including photos, witness contacts, and police reports. Then contact us promptly so we can guide you through the claims process and protect your rights.'
          }
        }
      ]
    });

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/img/logo/logo-round.webp" sizes="any" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
            rel="stylesheet"
          />

          {/* Google Tag Manager and initialization */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=AW-10869537885`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-10869537885');
              `
            }}
          />

          {/* Schema Markup */}
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: schemaMarkup
            }}
          />

          {/* FAQ Schema Markup */}
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: faqSchemaMarkup
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
