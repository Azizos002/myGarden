export type ProductCategory = 'natural' | 'artificial' | 'plants' | 'service';

export type Product = {
  id: string;
  category: ProductCategory;
  nameKey: string;
  shortKey: string;
  longKey: string;
  priceType: 'sqm' | 'unit' | 'quote';
  priceValue: number | null;
  tags: string[];
  images: string[];
  stockStatus: 'in_stock' | 'limited' | 'on_request';
};

export const products: Product[] = [
  {
    id: 'natural-premium',
    category: 'natural',
    nameKey: 'naturalPremium.name',
    shortKey: 'naturalPremium.short',
    longKey: 'naturalPremium.long',
    priceType: 'sqm',
    priceValue: 35,
    tags: ['premium', 'soft'],
    images: [
      '/images/produits/naturel/paspalum/gardenWithPaspalumGrass.jpg',
      '/images/produits/naturel/paspalum/gardenWithPaspalumGrass.jpg'
    ],
    stockStatus: 'in_stock'
  },
  {
    id: 'artificial-pro',
    category: 'artificial',
    nameKey: 'artificialPro.name',
    shortKey: 'artificialPro.short',
    longKey: 'artificialPro.long',
    priceType: 'sqm',
    priceValue: 49,
    tags: ['durable', 'easy-care'],
    images: [
      '/images/produits/artificiel/1.jpg',
      '/images/produits/artificiel/2.jpg'
    ],
    stockStatus: 'limited'
  },
  {
    id: 'plants-mediterranean',
    category: 'plants',
    nameKey: 'plantsMediterranean.name',
    shortKey: 'plantsMediterranean.short',
    longKey: 'plantsMediterranean.long',
    priceType: 'unit',
    priceValue: 18,
    tags: ['mediterranean', 'shade'],
    images: [
      '/images/produits/plantes/1.jpg',
      '/images/produits/plantes/2.jpg'
    ],
    stockStatus: 'in_stock'
  },
  {
    id: 'irrigation-smart',
    category: 'service',
    nameKey: 'irrigationSmart.name',
    shortKey: 'irrigationSmart.short',
    longKey: 'irrigationSmart.long',
    priceType: 'quote',
    priceValue: null,
    tags: ['smart', 'water-saving'],
    images: [
      '/images/produits/entretien/1.jpg'
    ],
    stockStatus: 'on_request'
  }
];
