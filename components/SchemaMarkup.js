// components/SchemaMarkup.js
import React from 'react';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Boring Sites",
    "url": "https://boringsites.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://boringsites.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boring Sites",
    "url": "https://boringsites.com",
    "logo": "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
    "sameAs": [
      "https://twitter.com/yourTwitterHandle",
      "https://www.facebook.com/yourFacebookPage",
      "https://www.linkedin.com/company/yourLinkedInPage"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Boring Sites",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "125"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I create a website with Boring Sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can create a website using Notion as your CMS and Boring Sites to turn it into a blog, helpdesk, documentation site, marketplace, or directory in minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Boring Sites SEO-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Boring Sites creates superfast websites that are SEO-friendly, helping your content rank better in search engines."
        }
      }
      // Add more FAQ items as needed
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;