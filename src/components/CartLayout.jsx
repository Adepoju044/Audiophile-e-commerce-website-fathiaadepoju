import { NavLink } from "react-router-dom";
import { useCart } from "./Contexts/CartContext";

function CartOverlay({ isOpen, onClose }) {
  const { cartItems, clearCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div
          className={`absolute right-0 md:right-20 top-24 w-[350px] md:w-[380px] bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-out p-8
          ${isOpen ? "translate-y-0" : "translate-y-32"}
        `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-bold text-lg">CART ({totalItems})</h2>

            <button
              className="text-sm underline opacity-60 cursor-pointer"
              onClick={() => {
                clearCart();
              }}
            >
              Remove all
            </button>
          </div>

          <div className="flex-1 scrollbar-hide">
            {cartItems.length === 0 ? (
              <>
                <p className="text-gray-500 ">No Product in cart...</p>

                <div className="flex justify-between font-bold mt-36 md:mt-42 mb-9">
                  <span>Total</span>
                  <span>$0</span>
                </div>
                <button
                  className={`w-full py-3 rounded font-bold text-white ${
                    cartItems.length === 0
                      ? "bg-[#F2F2F2] cursor-not-allowed"
                      : "bg-[#D87D4A] hover:bg-[#FBAF85]"
                  }`}
                  disabled={cartItems.length === 0}
                >
                  CHECKOUT
                </button>
              </>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 px-4">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-500">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>{" "}
                  <div className="flex items-center bg-gray-100 w-28 h-10">
                    <button
                      className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>

                    <span className="px-4 py-3 text-center">
                      {item.quantity}
                    </span>

                    <button
                      className="px-4 py-3 text-gray-500 hover:text-orange-500 transition-colors duration-300"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div>
              <div className="flex justify-between font-bold mt-36 md:mt-42 mb-9">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <NavLink to="/checkout">
                <button className="w-full py-3 rounded font-bold text-white bg-orange-500 hover:bg-orange-300 transition-all duration-100 cursor-pointer">
                  CHECKOUT
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CartOverlay;
