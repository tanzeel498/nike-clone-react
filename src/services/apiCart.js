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
  // ask for userId in cart if needed
  const query = `
    query {
        cart {
          items {
            _id
            quantity
            colorCode
            size
            product { _id } 
          }
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
  return response.data.cart;
}

export async function getCartProduct(id, color) {
  const query = `
    query Product($id: ID!, $color: String) {
      product(id: $id, color: $color) {
        title
        subtitle
        colors {
          colorDescription
          fullPrice
          currentPrice
          squarishUrl
          skus { _id size available}
        }
      } 
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id, color } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.product;
}

export async function addToCart({ id, colorCode, size }) {
  const query = `
    mutation AddToCart($id: ID!, $colorCode: String!, $size: Float!) {
      addToCart(id: $id, colorCode: $colorCode, size: $size)
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id, colorCode, size } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.addToCart;
}

export async function updateCartItem({ id, ...data }) {
  const query = `
    mutation UpdateCartItem($id: ID!, $data: CartItemUpdateData!) {
      updateCartItem(id: $id, data: $data)
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id, data } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.updateCartItem;
}

export async function deleteCartItem(id) {
  const query = `
    mutation DeleteCartItem($id: ID!) {
      deleteCartItem(id: $id)
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.deleteCartItem;
}
