import { useCart } from "./Contexts/CartContext";
import { useState } from "react";

function ProductDetailMain() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: "/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    imagee: "/product-xx99-mark-two-headphones/mobile/image-product.jpg",
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 md:px-40 py-8">
        <button
          className="text-gray-500 hover:text-orange-500 font-bold transition-colors duration-300 text-sm mt-10 cursor-pointer"
          onClick={() => window.history.back()}
        >
          ← Go Back
        </button>
      </div>

      <div className="container mx-auto px-6 md:px-20 lg:px-40 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-32 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden order-1 md:order-1">
            <img
              src={product.image}
              alt={product.name}
              className="hidden lg:block w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
            />
            <img
              src={product.imagee}
              alt={product.name}
              className="block md:block lg:hidden w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="text-center md:text-center lg:text-left order-2 md:order-2 space-y-4 md:space-y-6 lg:space-y-8">
            <p className="text-orange-500 text-sm md:text-base tracking-[0.5em] font-light mb-4">
              NEW PRODUCT
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-snug">
              {product.name}
            </h1>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl font-bold">
              $ {product.price.toLocaleString()}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="flex items-center bg-gray-100 w-32 md:w-32">
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
                className="bg-orange-500 hover:bg-orange-300 cursor-pointer text-white px-8 py-3 font-bold uppercase tracking-wide transition-colors whitespace-nowrap"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailMain;
