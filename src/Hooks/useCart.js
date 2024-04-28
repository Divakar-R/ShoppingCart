import { useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeCartItem = (id) => {
    setCart((cart) => {
      return cart.filter((p) => p.id !== id);
    });
  };

  return { cart, handleAddToCart, removeCartItem };
}
