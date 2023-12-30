import { SERVER_BASE_URL } from "../utils/constants";

export async function getProducts() {
  const response = await fetch(`${SERVER_BASE_URL}/products`);

  if (!response.ok) throw new Error(response.statusText);
  const products = await response.json();
  return products;
}

export async function getProduct(productId, color) {
  const response = await fetch(
    `${SERVER_BASE_URL}/products/${productId}?color=${color}`,
  );

  if (!response.ok) throw new Error(response.statusText);
  const product = await response.json();
  return product;
}

export async function getProductColors(productId) {
  const response = await fetch(
    `${SERVER_BASE_URL}/product-colors/${productId}`,
  );

  if (!response.ok) throw new Error(response.statusText);
  const colors = await response.json();
  return colors;
}

export async function addToCart(productData) {
  const response = await fetch(`${SERVER_BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response) throw new Error(response.statusText);
  const user = response.json();
  return user;
}
