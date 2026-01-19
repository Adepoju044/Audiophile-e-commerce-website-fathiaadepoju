// src/data/products.js
export const products = [
  {
    id: 1,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    price: 2999,
    imageDesktop:
      "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    imageMobile:
      "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    category: "headphones",
    features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure you'll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    isNew: true,
  },
  {
    id: 2,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    price: 1750,
    imageDesktop:
      "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    imageMobile:
      "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    category: "headphones",
    isNew: false,
  },
  {
    id: 3,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    price: 899,
    imageDesktop: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    imageMobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    category: "headphones",
    isNew: false,
  },
  // Add more products as needed
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

// Helper function to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

// Helper function to get new products
export const getNewProducts = () => {
  return products.filter((product) => product.isNew);
};
