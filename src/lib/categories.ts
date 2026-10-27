export const CATEGORIES = [
  "Small Size Tiles",
  "Porcelain Tiles",
  "Slabs",
  "Terracotta",
  "Glass Mosaics",
  "Trims",
] as const;

export type Category = (typeof CATEGORIES)[number];

const DEFAULT_CATEGORY_BY_BRAND: Record<string, Category> = {
  wow: "Small Size Tiles",
  aquariodue: "Small Size Tiles",
  dna: "Small Size Tiles",
  "paula purroy": "Small Size Tiles",
  azuvi: "Porcelain Tiles",
  geotiles: "Porcelain Tiles",
  mayor: "Porcelain Tiles",
  mainzu: "Porcelain Tiles",
  kerlife: "Porcelain Tiles",
  ascale: "Slabs",
  todobarro: "Terracotta",
  alteret: "Terracotta",
  vivaterra: "Terracotta",
  vidrepur: "Glass Mosaics",
  alumacer: "Trims",
  embeplast: "Trims",
};

export function defaultCategoryFor(brand: string): Category | null {
  return DEFAULT_CATEGORY_BY_BRAND[brand.trim().toLowerCase()] ?? null;
}
