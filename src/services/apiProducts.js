import { BACKEND_BASE_URL } from "../utils/constants";

export async function getProducts() {
  const response = await fetch(`${BACKEND_BASE_URL}/products`);

  if (!response.ok) throw new Error(response.statusText);
  const products = await response.json();
  return products;
}
