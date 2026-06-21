export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const assets = {
  logo: assetUrl('assets/logo.svg'),
  hero: assetUrl('assets/images/hero.webp'),
  living: assetUrl('assets/images/living.jpg'),
  mapCard: assetUrl('assets/images/map-card.jpg'),
  relocateBg: assetUrl('assets/images/relocate-bg.jpg'),
  contact: assetUrl('assets/images/contact.jpg'),
  landingConsultation: assetUrl('assets/images/landing-consultation.jpg'),
  landingPaperwork: assetUrl('assets/images/landing-paperwork.jpg'),
  landingPersonalizedMove: assetUrl('assets/images/landing-personalized-move.jpg'),
  aboutPanamaHero: assetUrl('assets/images/about-panama-hero.jpg')
};
