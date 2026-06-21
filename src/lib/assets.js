export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const assets = {
  logo: assetUrl('assets/logo.svg'),
  hero: assetUrl('assets/images/hero.webp'),
  living: assetUrl('assets/images/living.jpg'),
  mapCard: assetUrl('assets/images/map-card.jpg'),
  relocateBg: assetUrl('assets/images/relocate-bg.jpg')
};
