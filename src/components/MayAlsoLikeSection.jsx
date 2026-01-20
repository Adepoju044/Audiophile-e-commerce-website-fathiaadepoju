import { Link } from "react-router-dom";

function YouMayAlsoLike() {
  const relatedProducts = [
    {
      name: "XX99 MARK I",
      image: "/shared/desktop/image-xx99-mark-one-headphones.jpg",
      imagee: "/shared/mobile/image-xx99-mark-one-headphones.jpg",
      link: "/product/xx99-mark-i",
    },
    {
      name: "XX59",
      image: "/shared/desktop/image-xx59-headphones.jpg",
      imagee: "/shared/mobile/image-xx59-headphones.jpg",
      link: "/product/xx59",
    },
    {
      name: "ZX9 SPEAKER",
      image: "/shared/desktop/image-zx9-speaker.jpg",
      imagee: "/shared/mobile/image-zx9-speaker.jpg",
      link: "/product/zx9-speaker",
    },
  ];

  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-40 py-20">
      <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-12">
        You may also like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
        {relatedProducts.map((product, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="bg-gray-100 rounded-lg mb-6 overflow-hidden w-full max-w-xs sm:max-w-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full lg:h-60 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500 hidden sm:block"
              />
              <img
                src={product.imagee}
                alt={product.name}
                className="w-full h-30 object-cover sm:hidden"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">
              {product.name}
            </h3>

            <Link to={product.link}>
              <button className="bg-orange-400 hover:bg-orange-300 text-white px-6 py-2 md:px-8 md:py-3 uppercase tracking-wide text-sm md:text-base font-bold transition-all duration-300 cursor-pointer">
                See Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YouMayAlsoLike;
