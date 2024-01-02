import { SERVER_BASE_URL } from "../utils/constants";

export async function getCart() {
  const res = await fetch(`${SERVER_BASE_URL}/cart`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const cart = await res.json();
  return cart;
}

export async function addToCart(productData) {
  const res = await fetch(`${SERVER_BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    credentials: "include",
  });

  if (!res) throw new Error(res.statusText);
  const user = res.json();
  return user;
}
