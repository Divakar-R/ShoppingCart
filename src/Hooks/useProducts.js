import { useEffect, useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("loaded");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return { products, setProducts };
}
