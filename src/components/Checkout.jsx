import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import ConfirmationModal from "./ConfirmationModal";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems = [] }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [order, setOrder] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  if (!cartItems.length) {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </div>
      </section>
    );
  }
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const handleConfirmOrder = () => {
    setOrder({
      id: `ORD-${Date.now()}`,
      items: cartItems,
      grandTotal,
    });
    setShowConfirmation(true);
  };

  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-orange-500 mb-8 flex items-center text-sm font-medium"
          >
            <span className="mr-2">←</span> Go Back
          </button>

          <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
            CHECKOUT
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <CheckoutForm onValidityChange={setIsFormValid} />
            </div>

            <div className="lg:col-span-1">
              <OrderSummary
                items={cartItems}
                subtotal={subtotal}
                shipping={shipping}
                vat={vat}
                grandTotal={grandTotal}
                onConfirm={handleConfirmOrder}
                disabled={!isFormValid}
              />
            </div>
          </div>

          {showConfirmation && (
            <ConfirmationModal
              order={order}
              onClose={() => setShowConfirmation(false)}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
