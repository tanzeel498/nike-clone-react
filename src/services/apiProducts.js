import { SERVER_BASE_URL } from "../utils/constants";

export async function getProducts() {
  const res = await fetch(`${SERVER_BASE_URL}/products`);

  if (!res.ok) throw new Error(res.statusText);
  const products = await res.json();
  return products;
}

export async function getProduct(productId, color) {
  const res = await fetch(
    `${SERVER_BASE_URL}/products/${productId}?color=${color}`,
  );

  if (!res.ok) throw new Error(res.statusText);
  const product = await res.json();
  return product;
}

export async function getProductColors(productId) {
  const res = await fetch(`${SERVER_BASE_URL}/product-colors/${productId}`);

  if (!res.ok) throw new Error(res.statusText);
  const colors = await res.json();
  return colors;
}
