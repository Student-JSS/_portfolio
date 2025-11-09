import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title = "Shivam Kumar | Top MERN Stack Developer & GenAI Expert Portfolio",
  description = "🚀 Shivam Kumar - Expert MERN Stack Developer & GenAI Specialist. Portfolio showcasing 8+ innovative projects, JavaScript mastery, React.js expertise, Node.js backend development, MongoDB databases, and cutting-edge Generative AI solutions. Available for hire!",
  keywords = "Shivam, Shivam Kumar, Shivam Developer, MERN Stack Developer, React Developer, Node.js Expert, JavaScript Developer, GenAI Developer, Full Stack Engineer",
  ogImage = "https://ishivam.tech/og-image.png",
  canonical = null
}) => {
  const location = useLocation();
  const currentUrl = `https://ishivam.tech${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:image', ogImage);

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:url', currentUrl);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Update canonical URL
    updateCanonical(canonicalUrl);

    // Add structured data for current page
    updateStructuredData(title, description, currentUrl);

  }, [title, description, keywords, currentUrl, canonicalUrl, ogImage]);

  const updateMetaTag = (attribute, value, content) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, value);
      element.setAttribute('content', content);
      document.getElementsByTagName('head')[0].appendChild(element);
    }
  };

  const updateCanonical = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.getElementsByTagName('head')[0].appendChild(canonical);
    }
  };

  const updateStructuredData = (title, description, url) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[data-page-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-page-schema', 'true');
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "author": {
        "@type": "Person",
        "name": "Shivam Kumar",
        "url": "https://ishivam.tech",
        "sameAs": [
          "https://github.com/Student-JSS",
          "https://www.linkedin.com/in/shivam-kumar-88b154320/",
        ]
      },
      "publisher": {
        "@type": "Person",
        "name": "Shivam Kumar"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    script.textContent = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  return null; 
};

export default SEOHead;
