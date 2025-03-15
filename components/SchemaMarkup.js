// components/SchemaMarkup.js
import React from 'react';

const SchemaMarkup = () => {
  const websiteSchema = {
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
      "https://twitter.com/BoringSites",
      "https://www.facebook.com/BoringSites",
      "https://www.linkedin.com/company/BoringSites"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Boring Sites",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "description": "Create superfast websites with Notion as your CMS. Go from Notion to Blog, Helpdesk, Documentation, Marketplace or Directory in minutes. Build unlimited sites!",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124"
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
          "text": "You can create a website using Notion as your CMS and Boring Sites to turn it into powerful blog, helpdesk, documentation site, marketplace, or directory in minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Boring Sites SEO-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Boring Sites creates superfast websites that are SEO-friendly, helping your content rank better in search engines."
        }
      },
      {
        "@type": "Question",
        "name": "Can I create a marketplace with Boring Sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can create a marketplace or directory site with Boring Sites using Notion as your CMS. It's a no-code solution that lets you build unlimited sites."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are websites created with Boring Sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boring Sites using Amazon AWS the websites are superfast and optimized for excellent SEO. You can go from Notion to a live website in minutes using our AI Agents."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Websites Built on Boring",
        "item": "https://boringsites.com/showcase"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://boringsites.com/pricing"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrations",
        "item": "https://boringsites.com/integrations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Boring App",
        "item": "https://app.boringsites.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;