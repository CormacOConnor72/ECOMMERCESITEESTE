export const sampleProducts = [
  {
    id: '1',
    name: 'Abstract Dreams T-Shirt',
    description: 'A flowing abstract design that captures the essence of dreams and imagination. Printed on premium organic cotton.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 't-shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    inStock: true,
    stockCount: 25,
    featured: true,
    tags: ['abstract', 'cotton', 'unisex']
  },
  {
    id: '2',
    name: 'Cosmic Journey Hoodie',
    description: 'Embark on a cosmic journey with this stunning space-themed hoodie. Features hand-drawn galaxies and stars.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Purple'],
    inStock: true,
    stockCount: 15,
    featured: true,
    tags: ['space', 'cosmic', 'hoodie']
  },
  {
    id: '3',
    name: 'Nature\'s Harmony Tank Top',
    description: 'A beautiful botanical design celebrating the harmony of nature. Perfect for summer days.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop',
    category: 'tank-tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Sage Green', 'Light Pink'],
    inStock: true,
    stockCount: 30,
    featured: false,
    tags: ['nature', 'botanical', 'summer']
  },
  {
    id: '4',
    name: 'Urban Streets Graphic Tee',
    description: 'Street art inspired design capturing the energy of urban life. Bold and expressive.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop',
    category: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    inStock: true,
    stockCount: 20,
    featured: false,
    tags: ['street-art', 'urban', 'bold']
  },
  {
    id: '5',
    name: 'Limited Edition Artist Series',
    description: 'Exclusive limited edition piece from our artist series. Only 50 pieces available worldwide.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop',
    category: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    inStock: true,
    stockCount: 8,
    featured: true,
    tags: ['limited-edition', 'artist-series', 'exclusive']
  },
  {
    id: '6',
    name: 'Minimalist Lines Polo',
    description: 'Clean, minimalist design featuring geometric lines. Perfect for casual sophistication.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    category: 'polo-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    inStock: true,
    stockCount: 18,
    featured: false,
    tags: ['minimalist', 'geometric', 'polo']
  }
]

export const categories = [
  { id: 'all', name: 'All Products', count: sampleProducts.length },
  { id: 't-shirts', name: 'T-Shirts', count: 3 },
  { id: 'hoodies', name: 'Hoodies', count: 1 },
  { id: 'tank-tops', name: 'Tank Tops', count: 1 },
  { id: 'polo-shirts', name: 'Polo Shirts', count: 1 }
]