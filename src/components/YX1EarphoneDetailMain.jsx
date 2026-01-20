import { useState } from "react";
import { useCart } from "./Contexts/CartContext";

function YX1EarphoneDetailMain() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  const product = {
    id: 5,
    name: "XX59 Headphones",
    price: 899,
    image: "/product-xx59-headphones/desktop/image-product.jpg",
    imagee: "/product-xx59-headphones/mobile/image-product.jpg",
  };
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-40 py-8">
          <button
            className="text-gray-500 hover:text-orange-500 transition-colors duration-300 font-bold text-sm mt-10"
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

        <div className="container mx-auto px-11 md:px-40 py-8">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/product-yx1-earphones/desktop/image-product.jpg"
                alt="XX59 Headphones"
                className="w-full h-auto object-cover block hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="text-start md:text-left">
              <p className="text-orange-500 text-sm tracking-[0.5em] font-light mb-6">
                NEW PRODUCT
              </p>

              <h1 className="text-3xl md:text-5xl font-bold uppercase mb-7 leading-tight">
                YX1 Wireless
                <br /> Earphones
              </h1>

              <p className="text-gray-600 mb-4 md:mb-8 leading-relaxed">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>

              <p className="text-lg font-bold mb-5 md:mb-8">$ 599</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 w-32">
                  <button
                    className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300 flex-1 cursor-pointer"
                    onClick={() => setQuantity((s) => Math.max(1, s - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-3 font-bold flex-1 text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300 flex-1 cursor-pointer"
                    onClick={() => setQuantity((s) => Math.max(1, s + 1))}
                  >
                    +
                  </button>
                </div>

                <button
                  className="bg-orange-400 hover:bg-orange-300 text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 md:w-auto cursor-pointer whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default YX1EarphoneDetailMain;
