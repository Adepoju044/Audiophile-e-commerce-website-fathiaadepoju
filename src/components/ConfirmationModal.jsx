import { useNavigate } from "react-router-dom";

function ConfirmationModal({ order, onClose }) {
  const navigate = useNavigate();
  if (!order) return null;

  const firstItem = order.items[0];
  const otherItemsCount = order.items.length - 1;

  const handleBackHome = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" />

      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg max-w-md w-full p-8">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold uppercase leading-tight mb-4">
            Thank you <br /> for your order
          </h2>

          <p className="text-gray-500 mb-6">
            You will receive an email confirmation shortly.
          </p>

          <div className="rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-gray-100 p-4">
                <div className="flex items-center">
                  <img
                    src={firstItem.image}
                    alt={firstItem.name}
                    className="w-12 h-12 rounded"
                  />

                  <div className="ml-4 flex-1">
                    <p className="font-bold text-sm">{firstItem.name}</p>
                    <p className="text-gray-500 text-sm">
                      ${firstItem.price.toLocaleString()}
                    </p>
                  </div>

                  <span className="text-gray-500 font-bold">
                    x{firstItem.quantity}
                  </span>
                </div>

                {otherItemsCount > 0 && (
                  <p className="text-xs text-gray-500 text-center mt-3 pt-3 border-t">
                    and {otherItemsCount} other item(s)
                  </p>
                )}
              </div>

              <div className="bg-black text-white p-4 flex flex-col justify-center">
                <p className="text-gray-400 uppercase text-sm mb-2">
                  Grand Total
                </p>
                <p className="text-lg font-bold">
                  ${order.grandTotal.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleBackHome}
            className="w-full bg-orange-500 text-white py-3 uppercase font-bold hover:bg-orange-300 transition cursor-pointer"
          >
            Back to home
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;
