function OrderSummary({
  items,
  subtotal,
  shipping,
  vat,
  grandTotal,
  onConfirm,
  disabled,
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-6 uppercase">Summary</h2>

      <div className="space-y-6 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-sm">{item.name}</h3>
              <p className="text-gray-500 text-sm">
                ${item.price.toLocaleString()}
              </p>
            </div>
            <span className="text-gray-500 font-bold">x{item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">Total</span>
          <span className="font-bold">${subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">Shipping</span>
          <span className="font-bold">${shipping.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">
            VAT (included)
          </span>
          <span className="font-bold">${vat.toLocaleString()}</span>
        </div>

        <div className="flex justify-between pt-4 border-t">
          <span className="text-gray-500 uppercase text-sm">Grand Total</span>
          <span className="text-orange-500 font-bold text-lg">
            ${grandTotal.toLocaleString()}
          </span>
        </div>
      </div>

      <button
        onClick={onConfirm}
        disabled={disabled}
        className={`w-full mt-8 py-4 rounded font-bold transition cursor-pointer
    ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-orange-500 text-white hover:bg-orange-600"
    }`}
      >
        CONTINUE & PAY
      </button>
    </div>
  );
}

export default OrderSummary;
