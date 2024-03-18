import { SERVER_URL } from "../utils/constants";

export async function createOrder(paymentIntent) {
  const query = `
  mutation CreateOrder($paymentIntent: String!){
    createOrder(paymentIntent: $paymentIntent)
  }
`;
  const token = localStorage.getItem("token");
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { paymentIntent } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.createOrder;
}

export async function getOrders() {
  const query = `
    query {
      orders {
        _id
        items {
          productId
        }
        createdAt
        totalAmount
        status
      }
  }
`;
  const token = localStorage.getItem("token");
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.orders;
}

export async function getOrder(id) {
  const query = `
    query Order($id: ID!) {
      order(id: $id) {
        _id
        items {
          productId colorCode size quantity price title subtitle
        }
        createdAt
        totalAmount
        status
        paymentId
        address { firstName lastName email phone address apt city state postalCode }
      }
  }
`;
  const token = localStorage.getItem("token");
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables: { id } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.order;
}
