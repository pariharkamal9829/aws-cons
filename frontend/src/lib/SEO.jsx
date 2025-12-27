import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://awspartnerx.cloud';
const SITE_NAME = 'AWS Partner X';
const DEFAULT_IMAGE = `${SITE_URL}/logos/awspartnerxlogo.png`;

export default function SEO({
  title,
  description,
  pathname = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  canonical,
  breadcrumbs,
}) {
  const url = `${SITE_URL}${pathname}`;
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const metaDesc = description || 'AWS Partner X provides APN partner enablement, AWS consulting, and cloud architecture services.';
  const canon = canonical || url;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logos/awspartnerxlogo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/awspartnerx",
      "https://twitter.com/awspartnerx"
    ]
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": SITE_URL,
    "name": SITE_NAME,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canon} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />

      {/* Basic mobile and accessibility hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(organizationLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
      {breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((bc, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": bc.name,
              "item": bc.item
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}
