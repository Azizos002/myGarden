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
    priceValue: 9,
    tags: ['premium', 'soft'],
    images: productImages['natural-bermuda'] ?? ['/placeholder.svg'],
    stockStatus: 'in_stock'
  },
  {
    id: 'natural-kikuyu',
    category: 'natural',
    nameKey: 'naturalKikuyu.name',
    shortKey: 'naturalKikuyu.short',
    longKey: 'naturalKikuyu.long',
    priceType: 'sqm',
    priceValue: 9,
    tags: ['soft', 'durable'],
    images: productImages['natural-kikuyu'] ?? ['/placeholder.svg'],
    stockStatus: 'in_stock'
  },
  {
    id: 'natural-paspalum',
    category: 'natural',
    nameKey: 'naturalPaspalum.name',
    shortKey: 'naturalPaspalum.short',
    longKey: 'naturalPaspalum.long',
    priceType: 'sqm',
    priceValue: 10,
    tags: ['premium', 'durable'],
    images: productImages['natural-paspalum'] ?? ['/placeholder.svg'],
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
    images: productImages['artificial-15mm'] ?? ['/placeholder.svg'],
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
    images: productImages['artificial-20mm'] ?? ['/placeholder.svg'],
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
    images: productImages['artificial-30mm'] ?? ['/placeholder.svg'],
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
    images: productImages['artificial-40mm'] ?? ['/placeholder.svg'],
    stockStatus: 'limited'
  },
  {
    id: 'plants-zaitoun',
    category: 'plants',
    nameKey: 'plantsZaitoun.name',
    shortKey: 'plantsZaitoun.short',
    longKey: 'plantsZaitoun.long',
    priceType: 'unit',
    priceValue: null,
    tags: ['mediterranean', 'premium'],
    images: productImages['plants-zaitoun'] ?? ['/placeholder.svg'],
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
    images: productImages['irrigation-smart'] ?? ['/placeholder.svg'],
    stockStatus: 'on_request'
  },
  {
  id: 'plants-cocos',
  category: 'plants',
  nameKey: 'plantsCocos.name',
  shortKey: 'plantsCocos.short',
  longKey: 'plantsCocos.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['tropical', 'decorative', 'outdoor'],
  images: productImages['plants-cocos'] ?? ['/placeholder.svg'],
  stockStatus: 'on_request'
},
{
  id: 'plants-strelitzia',
  category: 'plants',
  nameKey: 'plantsStrelitzia.name',
  shortKey: 'plantsStrelitzia.short',
  longKey: 'plantsStrelitzia.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['tropical', 'decorative', 'premium', 'outdoor'],
  images: productImages['plants-strelitzia'] ?? ['/placeholder.svg'],
  stockStatus: 'on_request'
},
{
  id: 'plants-palmier-royale',
  category: 'plants',
  nameKey: 'plantsPalmierRoyale.name',
  shortKey: 'plantsPalmierRoyale.short',
  longKey: 'plantsPalmierRoyale.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['palm', 'premium', 'decorative', 'outdoor', 'sun'],
  images: productImages['plants-palmier-royale'] ?? ['/placerholder.svg'],
  stockStatus: 'on_request'
},
{
  id: 'plants-yucca-panache',
  category: 'plants',
  nameKey: 'plantsYuccaPanache.name',
  shortKey: 'plantsYuccaPanache.short',
  longKey: 'plantsYuccaPanache.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['low-maintenance', 'drought-tolerant', 'premium', 'decorative', 'outdoor', 'sun'],
  images: productImages['plants-yucca-panache'] ?? ['/placerholder.svg'],
  stockStatus: 'in_stock'
},
{
  id: 'plants-yucca-normal',
  category: 'plants',
  nameKey: 'plantsYuccaNormal.name',
  shortKey: 'plantsYuccaNormal.short',
  longKey: 'plantsYuccaNormal.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['low-maintenance', 'drought-tolerant', 'decorative', 'outdoor', 'sun'],
  images: productImages['plants-yucca-normal'] ?? ['/placerholder.svg'],
  stockStatus: 'in_stock'
},
{
  id: 'plants-strelitzia-reginae',
  category: 'plants',
  nameKey: 'plantsStrelitziaReginae.name',
  shortKey: 'plantsStrelitziaReginae.short',
  longKey: 'plantsStrelitziaReginae.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['tropical', 'decorative', 'premium', 'outdoor', 'sun'],
  images: productImages['plants-strelitzia-reginae'] ?? ['/placerholder.svg'],
  stockStatus: 'in_stock'
},
{
  id: 'plants-dracaena',
  category: 'plants',
  nameKey: 'plantsDracaena.name',
  shortKey: 'plantsDracaena.short',
  longKey: 'plantsDracaena.long',
  priceType: 'unit',
  priceValue: null,
  tags: ['decorative', 'premium', 'low-maintenance', 'outdoor', 'shade'],
  images: productImages['plants-dracaena'] ?? ['/placerholder.svg'],
  stockStatus: 'in_stock'
}
];
