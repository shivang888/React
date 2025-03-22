import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product) => {
    try {
      // Check if the product is already in the cart
      const existingItem = cartItems.find(
        (item) => item.productId === product.id
      );

      if (existingItem) {
        // Update quantity
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        await axios.put(
          `http://localhost:3001/cart/${existingItem.id}`,
          updatedItem
        );
        setCartItems(
          cartItems.map((item) =>
            item.id === existingItem.id ? updatedItem : item
          )
        );
      } else {
        // Add new item
        const newItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        const response = await axios.post(
          "http://localhost:3001/cart",
          newItem
        );
        setCartItems([...cartItems, response.data]);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${itemId}`);
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    try {
      const item = cartItems.find((item) => item.id === itemId);
      const updatedItem = { ...item, quantity };
      await axios.put(`http://localhost:3001/cart/${itemId}`, updatedItem);
      setCartItems(
        cartItems.map((item) => (item.id === itemId ? updatedItem : item))
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const clearCart = async () => {
    try {
      for (const item of cartItems) {
        await axios.delete(`http://localhost:3001/cart/${item.id}`);
      }
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const value = {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
