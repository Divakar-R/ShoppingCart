import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout.jsx";
import Products from "./Components/Products/Products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);
