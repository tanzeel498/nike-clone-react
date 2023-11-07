import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Jordan from "./pages/Jordan.jsx";
import Homepage from "./pages/Homepage.jsx";
import Accounts from "./pages/Accounts.jsx";
import LoginForm from "./features/user/LoginForm.jsx";
import PasswordForm from "./features/user/PasswordForm.jsx";
import SignUpForm from "./features/user/SignUpForm.jsx";
import CheckoutLayout from "./pages/CheckoutLayout.jsx";
import Tunnel from "./features/checkout/Tunnel.jsx";
import Checkout from "./features/checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "product", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "jordan", element: <Jordan /> },
  {
    path: "accounts",
    element: <Accounts />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "password", element: <PasswordForm /> },
      { path: "signup", element: <SignUpForm /> },
    ],
  },
  {
    element: <CheckoutLayout />,
    path: "checkout",
    children: [
      { path: "", element: <Checkout /> },
      { path: "tunnel", element: <Tunnel /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
