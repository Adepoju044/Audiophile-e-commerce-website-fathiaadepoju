import { useCart } from "./Contexts/CartContext";
import { useState } from "react";
function ZX9SpeakerDetailMain() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const product = {
    id: 3,
    name: "ZX9 Speaker",
    price: 4500,
    image: "/src/public/assets/product-zx9-speaker/desktop/image-product.jpg",
    imagee: "/src/public/assets/product-zx9-speaker/mobile/image-product.jpg",
  };
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-40 py-8">
          <button
            className="text-gray-500 hover:text-orange-500 font-bold transition-colors duration-300 text-sm mt-10 cursor-pointer"
            onClick={() => window.history.back()}
          >
            ← Go Back
          </button>
        </div>

        <div className="container mx-auto px-11 md:px-40 py-8">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/src/public/assets/product-zx9-speaker/desktop/image-product.jpg"
                alt="XX59 Headphones"
                className="w-full h-auto object-cover block hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="text-start md:text-left">
              <p className="text-orange-500 text-sm tracking-[0.5em] font-light mb-6">
                NEW PRODUCT
              </p>

              <h1 className="text-3xl md:text-5xl font-bold uppercase mb-7 leading-tight">
                ZX9 Speaker
              </h1>

              <p className="text-gray-600 mb-4 md:mb-8 leading-relaxed">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>

              <p className="text-lg font-bold mb-5 md:mb-8">$4500</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 w-32">
                  <button
                    className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300 flex-1  cursor-pointer"
                    onClick={() => setQuantity((s) => Math.max(1, s - 1))}
                  >
                    -
                  </button>

                  <span className="px-4 py-3 font-bold flex-1 text-center">
                    {quantity}
                  </span>

                  <button
                    className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300 flex-1  cursor-pointer"
                    onClick={() => setQuantity((s) => s + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddToCart();
                  }}
                  className="bg-orange-500 hover:bg-orange-300 cursor-pointer text-white px-8 py-3 font-bold uppercase tracking-wide transition-colors whitespace-nowrap duration-300"
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

export default ZX9SpeakerDetailMain;
