import { Link } from "react-router-dom";
function ZX7SpeakerDetailMainMayAlsoLikeSection() {
  const relatedProducts = [
    {
      name: "ZX9 SPEAKER",
      image: "/src/public/assets/product-zx9-speaker/desktop/image-product.jpg",
      imagee: "/src/public/assets/product-zx9-speaker/tablet/image-product.jpg",
      link: "/product/zx9-speaker",
    },
    {
      name: "XX99 MARK I",
      image:
        "/src/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      imagee:
        "/src/public/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      link: "/product/xx99-mark-i",
    },
    {
      name: "XX59",
      image:
        "/src/public/assets/product-xx59-headphones/desktop/image-product.jpg",
      imagee:
        "/src/public/assets/product-xx59-headphones/mobile/image-product.jpg",
      link: "/product/xx59",
    },
  ];
  return (
    <section className="container mx-auto px-6 md:px-40 py-20">
      <h2 className="text-3xl font-bold uppercase mb-12">You may also like</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedProducts.map((product, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 h-40 md:h-80 rounded-lg mb-8 overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 hidden md:block"
              />
              <img
                src={product.imagee}
                alt={product.name}
                className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-500 block md:hidden"
              />
            </div>

            <h3 className="text-2xl font-bold uppercase mb-8">
              {product.name}
            </h3>
            <Link to={product.link}>
              <button className="bg-orange-400 hover:bg-orange-300 text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 animate-pulse cursor-pointer">
                See Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ZX7SpeakerDetailMainMayAlsoLikeSection;
