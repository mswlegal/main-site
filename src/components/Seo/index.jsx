import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Seo({ title, description, canonicalUrl, ogImage, noIndex, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Mendez & Sanchez APC" />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string,
  ogImage: PropTypes.string,
  noIndex: PropTypes.bool,
  keywords: PropTypes.string
};

Seo.defaultProps = {
  canonicalUrl: '',
  ogImage: '',
  noIndex: false,
  keywords: ''
};

export default Seo;
