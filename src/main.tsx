import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router.tsx";
import CartItemsProvider from "./components/controller/CartItemsProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartItemsProvider>
      <Router />
    </CartItemsProvider>
  </React.StrictMode>
);
