import { Link } from "react-router-dom";
function ZX9SpeakerDetailMainMayAlsoLikeSection() {
  const relatedProducts = [
    {
      name: "ZX7 SPEAKER",
      image: "/product-zx7-speaker/desktop/image-product.jpg",
      imagee: "/product-zx7-speaker/tablet/image-product.jpg",
      link: "/product/zx7-speaker",
    },
    {
      name: "XX99 MARK I",
      image:
        "/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      imagee:
        "/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      link: "/product/xx99-mark-i-headphones",
    },
    {
      name: "XX59",
      image: "/product-xx59-headphones/desktop/image-product.jpg",
      imagee: "/product-xx59-headphones/mobile/image-product.jpg",
      link: "/product/xx59-headphones",
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

export default ZX9SpeakerDetailMainMayAlsoLikeSection;
