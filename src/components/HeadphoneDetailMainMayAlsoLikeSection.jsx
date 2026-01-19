import { Link } from "react-router-dom";
function HeadphoneDetailMainMayAlsoLikeSection() {
  const relatedProducts = [
    {
      name: "XX99 MARK I",
      image:
        "/src/public/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
      imagee:
        "/src/public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
      link: "/product/xx99-markk-i",
    },
    {
      name: "XX59",
      image: "/src/public/assets/shared/desktop/image-xx59-headphones.jpg",
      imagee: "/src/public/assets/shared/mobile/image-xx59-headphones.jpg",
      link: "/product/xx59",
    },
    {
      name: "ZX9 SPEAKER",
      image: "/src/public/assets/shared/desktop/image-zx9-speaker.jpg",
      imagee: "/src/public/assets/shared/mobile/image-zx9-speaker.jpg",
      link: "/product/zx9-speaker",
    },
  ];
  return (
    <section className="container mx-auto px-6 md:px-40 py-20">
      <h2 className="text-3xl font-bold uppercase mb-12">You may also like</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedProducts.map((product, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-100 rounded-lg mb-8 overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 hidden md:block"
              />
              <img
                src={product.imagee}
                alt={product.name}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block md:hidden"
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

export default HeadphoneDetailMainMayAlsoLikeSection;
