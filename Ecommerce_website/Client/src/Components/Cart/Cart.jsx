/* eslint-disable react/prop-types */
import { Trash2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
const Cart = ({cartItem}) => {
    const [quantity, setquantity] = useState(1)
  return (
    <div className="container mx-auto px-4 py-8">{console.log(cartItem)}
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        {cartItem.length > 0 ? (
          <>
            {cartItem.map((item) => (
              <div key={item.id} className="flex items-center hover:bg-gray-50 px-6 py-5 border-b">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button className="p-2 hover:bg-gray-100" onClick={ () =>{setquantity(quantity-1)} }>
                      <Minus size={16} />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button className="p-2 hover:bg-gray-100" onClick={ () =>{setquantity(quantity+1)} }>
                      <Plus size={16}/>
                    </button>
                  </div>
                  
                  <button className="p-2 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="p-6 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">
                  {cartItem.reduce((total, item) => total + (item.price * quantity), 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="p-8 text-center text-gray-500">
            Your cart is empty
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;