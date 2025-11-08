import { assetUrl } from '../utils/image';

export const plants = [
  {
    id: 'mint',
    name: 'Mint',
    category: 'Aromatic Plants',
    price: 4.99,
    image: assetUrl('plants/mint.svg'),
  },
  {
    id: 'lavender',
    name: 'Lavender',
    category: 'Aromatic Plants',
    price: 9.99,
    image: assetUrl('plants/lavender.svg'),
  },
  {
    id: 'aloe',
    name: 'Aloe Vera',
    category: 'Medicinal Plants',
    price: 12.99,
    image: assetUrl('plants/aloe.svg'),
  },
  {
    id: 'echinacea',
    name: 'Echinacea',
    category: 'Medicinal Plants',
    price: 8.49,
    image: assetUrl('plants/echinacea.svg'),
  },
  {
    id: 'jade',
    name: 'Jade Plant',
    category: 'Succulents',
    price: 14.99,
    image: assetUrl('plants/jade.svg'),
  },
  {
    id: 'haworthia',
    name: 'Zebra Haworthia',
    category: 'Succulents',
    price: 10.99,
    image: assetUrl('plants/haworthia.svg'),
  },
];

export const categories = [
  'Aromatic Plants',
  'Medicinal Plants',
  'Succulents',
];