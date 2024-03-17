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
import Account from "./pages/Account.jsx";
import LoginForm from "./features/authentication/LoginForm.jsx";
import PasswordForm from "./features/authentication/PasswordForm.jsx";
import SignUpForm from "./features/authentication/SignUpForm.jsx";
import CheckoutLayout from "./pages/CheckoutLayout.jsx";
import Tunnel from "./features/checkout/Tunnel.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ConfirmPayment from "./pages/ConfirmPayment.jsx";
import Orders from "./pages/Orders.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import UnProtectedRoute from "./ui/UnProtectedRoute.jsx";
import Profile from "./features/authentication/Profile.jsx";
import ResetPasswordForm from "./features/authentication/ResetPasswordForm.jsx";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 100 } },
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "products", element: <Products /> },
      { path: "product/:id", element: <Product /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "confirmPayment", element: <ConfirmPayment /> },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      { path: "tunnel", element: <Tunnel /> },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "jordan", element: <Jordan /> },
  {
    path: "account",
    element: <Account />,
    children: [
      {
        path: "join",
        element: (
          <UnProtectedRoute>
            <LoginForm />
          </UnProtectedRoute>
        ),
      },
      { path: "password", element: <PasswordForm /> },
      { path: "signup", element: <SignUpForm /> },
      { path: "reset-password", element: <ResetPasswordForm /> },
    ],
  },
  { element: <CheckoutLayout />, path: "checkout" },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} position="right" />
  </QueryClientProvider>,
);
