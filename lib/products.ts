import { productImages } from './imageManifests';

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
    id: 'natural-bermuda',
    category: 'natural',
    nameKey: 'naturalBermuda.name',
    shortKey: 'naturalBermuda.short',
    longKey: 'naturalBermuda.long',
    priceType: 'sqm',
    priceValue: 35,
    tags: ['premium', 'soft'],
    images: productImages['natural-bermuda'],
    stockStatus: 'in_stock'
  },
  {
    id: 'natural-kikuyu',
    category: 'natural',
    nameKey: 'naturalKikuyu.name',
    shortKey: 'naturalKikuyu.short',
    longKey: 'naturalKikuyu.long',
    priceType: 'sqm',
    priceValue: 32,
    tags: ['soft', 'durable'],
    images: productImages['natural-kikuyu'],
    stockStatus: 'in_stock'
  },
  {
    id: 'natural-paspalum',
    category: 'natural',
    nameKey: 'naturalPaspalum.name',
    shortKey: 'naturalPaspalum.short',
    longKey: 'naturalPaspalum.long',
    priceType: 'sqm',
    priceValue: 38,
    tags: ['premium', 'durable'],
    images: productImages['natural-paspalum'],
    stockStatus: 'limited'
  },
  {
    id: 'artificial-15mm',
    category: 'artificial',
    nameKey: 'artificial15.name',
    shortKey: 'artificial15.short',
    longKey: 'artificial15.long',
    priceType: 'sqm',
    priceValue: 29,
    tags: ['easy-care', 'durable'],
    images: productImages['artificial-15mm'],
    stockStatus: 'in_stock'
  },
  {
    id: 'artificial-20mm',
    category: 'artificial',
    nameKey: 'artificial20.name',
    shortKey: 'artificial20.short',
    longKey: 'artificial20.long',
    priceType: 'sqm',
    priceValue: 35,
    tags: ['durable', 'easy-care'],
    images: productImages['artificial-20mm'],
    stockStatus: 'in_stock'
  },
  {
    id: 'artificial-30mm',
    category: 'artificial',
    nameKey: 'artificial30.name',
    shortKey: 'artificial30.short',
    longKey: 'artificial30.long',
    priceType: 'sqm',
    priceValue: 42,
    tags: ['premium', 'durable'],
    images: productImages['artificial-30mm'],
    stockStatus: 'limited'
  },
  {
    id: 'artificial-40mm',
    category: 'artificial',
    nameKey: 'artificial40.name',
    shortKey: 'artificial40.short',
    longKey: 'artificial40.long',
    priceType: 'sqm',
    priceValue: 49,
    tags: ['premium', 'soft'],
    images: productImages['artificial-40mm'],
    stockStatus: 'limited'
  },
  {
    id: 'plants-zaitoun',
    category: 'plants',
    nameKey: 'plantsZaitoun.name',
    shortKey: 'plantsZaitoun.short',
    longKey: 'plantsZaitoun.long',
    priceType: 'unit',
    priceValue: 18,
    tags: ['mediterranean', 'premium'],
    images: productImages['plants-zaitoun'],
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
    images: productImages['irrigation-smart'],
    stockStatus: 'on_request'
  }
];
