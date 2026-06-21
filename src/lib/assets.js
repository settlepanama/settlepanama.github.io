export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const assets = {
  logo: assetUrl('assets/logo.svg'),
  safeguardLogo: assetUrl('assets/safeguard-ccs-logo.svg'),
  hero: assetUrl('assets/images/hero.webp'),
  living: assetUrl('assets/images/living.jpg'),
  mapCard: assetUrl('assets/images/map-card.jpg'),
  relocateBg: assetUrl('assets/images/relocate-bg.jpg'),
  contact: assetUrl('assets/images/contact.jpg'),
  landingConsultation: assetUrl('assets/images/landing-consultation.jpg'),
  landingPaperwork: assetUrl('assets/images/landing-paperwork.jpg'),
  landingPersonalizedMove: assetUrl('assets/images/landing-personalized-move.jpg'),
  aboutPanamaHero: assetUrl('assets/images/about-panama-hero.jpg'),
  aboutPanamaUsd: assetUrl('assets/images/about-panama-usd.jpg'),
  aboutPanamaResidency: assetUrl('assets/images/about-panama-residency.jpg'),
  aboutPanamaConnectivity: assetUrl('assets/images/about-panama-connectivity.jpg'),
  aboutPanamaWeather: assetUrl('assets/images/about-panama-weather.jpg'),
  aboutPanamaCost: assetUrl('assets/images/about-panama-cost.jpg'),
  aboutPanamaLifestyle: assetUrl('assets/images/about-panama-lifestyle.jpg')
};
