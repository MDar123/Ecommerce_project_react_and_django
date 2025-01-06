const Checkout = () => {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Order Summary</h1>
        
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sub Total</span>
            <span className="font-semibold">Rs. 410</span>
          </div>
  
          {/* Delivery Charges */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Delivery Charges</span>
            <span className="text-red-500">Rs. 99</span>
          </div>
  
          {/* Total Bill */}
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="font-semibold text-gray-700">Total bill</span>
            <span className="font-bold">Rs. 509</span>
          </div>
        </div>
  
        {/* Payment Method */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="bg-white rounded-lg shadow">
            <button className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50">
              <span className="font-medium">CASH ON DELIVERY (COD)</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
  
        {/* Place Order Button */}
        <button className="w-full mt-8 bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 flex items-center justify-between px-6">
          <span className="font-semibold">SIGN IN TO PLACE ORDER</span>
          <span className="font-bold">RS. 509</span>
        </button>
      </div>
    );
  }
  
  export default Checkout;