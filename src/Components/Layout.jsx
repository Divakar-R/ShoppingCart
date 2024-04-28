import React from "react";
import Footer from "./Footer/Footer";
import Home from "./Products/Products";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
