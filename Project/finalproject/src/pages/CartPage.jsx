import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, clearCart, getCartTotal, loading } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // In a real application, we would handle payment processing here
    setCheckoutSuccess(true);

    // Clear the cart after successful checkout
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      navigate("/products");
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {checkoutSuccess ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-md mb-8">
          <p className="text-lg font-semibold">Thank you for your purchase!</p>
          <p>
            Your order has been successfully placed. Redirecting to products
            page...
          </p>
        </div>
      ) : null}

      {cartItems.length === 0 && !checkoutSuccess ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Browse Products
          </button>
        </div>
      ) : (
        !checkoutSuccess && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b font-semibold grid grid-cols-4">
              <span className="col-span-2">Product</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="p-4 bg-gray-50 border-t">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={clearCart}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                >
                  Clear Cart
                </button>

                <button
                  onClick={handleCheckout}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CartPage;
