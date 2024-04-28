import React from "react";
import useProduct from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Products() {
  const { products } = useProduct();
  const { handleAddToCart, cart, removeCartItem } = useCart();
  console.log("products", products);
  return (
    <div>
      <Header cart={cart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => {
              return (
                <div key={product.id} className="col mb-5">
                  <div className="card h-100 p-2">
                    <img
                      className="card-img-top h-50  "
                      src={product.image}
                      alt={product.title}
                    />

                    <div className="card-body p-1">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.title}</h5>$
                        {product.price}
                      </div>
                    </div>

                    <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a
                          onClick={() => {
                            cart.find((c) => c.id === product.id)
                              ? removeCartItem(product.id)
                              : handleAddToCart(product);
                          }}
                          className="btn btn-outline-dark mt-auto"
                        >
                          {cart.find((c) => c.id === product.id)
                            ? "Remove From Cart"
                            : "Add To Cart"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
