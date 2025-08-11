import { SEOData } from '../types';

export const seoData: Record<string, SEOData> = {
  home: {
    title: "San Mateo Insurance Agent | Personal Lines Coverage | Auto & Home Insurance CA",
    description: "Your trusted personal lines insurance agent in San Mateo, CA. Protecting what matters most – your home, car, and family – with affordable, customized coverage.",
    keywords: ["San Mateo insurance agent", "personal lines insurance San Mateo", "auto insurance San Mateo CA", "home insurance San Mateo CA"]
  },
  about: {
    title: "About Your San Mateo Insurance Agent | Personal Story & Mission",
    description: "Meet your dedicated San Mateo insurance agent with 15+ years of experience protecting Bay Area families. Learn about our mission, values, and commitment to personalized service.",
    keywords: ["San Mateo insurance agent", "about insurance agent", "Bay Area insurance expert", "personal insurance story", "local agent mission"]
  },
  services: {
    title: "Personal Lines Insurance Services | San Mateo Auto, Home, Renters Coverage",
    description: "From auto and home insurance to renters and umbrella policies, I provide comprehensive personal lines coverage tailored to your lifestyle. Serving San Mateo, Burlingame, Foster City, Redwood City, and beyond.",
    keywords: ["auto insurance San Mateo", "home insurance San Mateo CA", "renters insurance San Mateo", "umbrella insurance San Mateo"]
  },
  testimonials: {
    title: "Client Reviews | San Mateo Insurance Agent Testimonials",
    description: "Hear from San Mateo clients who trust me to protect their homes, cars, and families with reliable coverage and exceptional service.",
    keywords: ["San Mateo insurance reviews", "insurance agent testimonials", "Bay Area insurance service"]
  },
  contact: {
    title: "Contact | Get Your Free Insurance Quote in San Mateo CA",
    description: "Request your free insurance quote today. Call, email, or fill out the form – I'm here to help you find the right coverage in San Mateo, CA.",
    keywords: ["insurance quotes San Mateo", "free insurance quote", "San Mateo insurance contact", "Bay Area insurance agent"]
  }
};

export const updatePageSEO = (page: keyof typeof seoData) => {
  const data = seoData[page];
  document.title = data.title;
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', data.description);
  
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', data.keywords.join(', '));
};