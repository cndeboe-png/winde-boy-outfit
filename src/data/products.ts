export interface Product {
  id: string;
  title: string;
  category: 'T-Shirts' | 'Hoodies' | 'Jeans' | 'Jackets' | 'Shirts' | 'Shorts' | 'Tracksuits';
  price: number;
  image: string;
  description: string;
  isNew: boolean;
  discountPrice?: number;
  trending: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'wb-001',
    title: 'Cyber Neon Tech Jacket',
    category: 'Jackets',
    price: 200,
    image: 'https://unsplash.com', 
    description: 'Premium heavyweight water-resistant tactical jacket featuring interior utility lining and signature Winde Boy aesthetic.',
    isNew: true,
    trending: true
  },
  {
    id: 'wb-002',
    title: 'Minimalist Box Fit Hoodie',
    category: 'Hoodies',
    price: 150,
    image: 'https://unsplash.com',
    description: 'Ultra-soft 450GSM French Terry cotton dropshoulder hoodie tailored for a perfect luxury streetwear drape.',
    isNew: false,
    discountPrice: 130,
    trending: true
  },
  {
    id: 'wb-003',
    title: 'Distressed Skinny Moto Jeans',
    category: 'Jeans',
    price: 140,
    image: 'https://unsplash.com',
    description: 'Stretch denim engineered with premium heavy distress patterning and reinforced structural paneling.',
    isNew: true,
    trending: false
  }
];
