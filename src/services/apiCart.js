import { SERVER_BASE_URL, SERVER_URL } from "../utils/constants";

export async function getNumCartItems() {
  const query = `
    query {
        cart {
          items { quantity }
        }
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  const totalItems = response.data.cart.items?.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  return totalItems;
}

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
  const response = await res.json();
  return response;
}

export async function updateCartItem(data) {
  const res = await fetch(`${SERVER_BASE_URL}/update-cart-item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  return response;
}

export async function deleteCartItem(id) {
  const res = await fetch(`${SERVER_BASE_URL}/delete-cart-item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  return response;
}
