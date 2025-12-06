import { CONSTELLATION_LORE, LORE_CATEGORIES } from "../data/constellationData";

export function getLoreEntries(signKey, activeCategoryLabel) {
  const catKey = LORE_CATEGORIES[activeCategoryLabel];
  if (!catKey) return [];
  const signData = CONSTELLATION_LORE[signKey];
  if (!signData) return [];
  return signData[catKey] || [];
}
