import { SERVER_URL } from "../utils/constants";

export async function getAddress() {
  const query = `
    query {
        user { 
          shippingAddress {
            firstName lastName email phone address apt city state postalCode
          }
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
  console.log("Address received!!!");
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.user.shippingAddress;
}

export async function updateAddress(data) {
  const query = `
    mutation UpdateAddress($data: AddressInputData!) {
      updateAddress (data: $data) { 
        firstName lastName email phone address apt city state postalCode
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
    body: JSON.stringify({ query, variables: { data } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);

  return response.data.updateAddress;
}

export async function getClientSecret() {
  const query = `
    mutation {
      createPaymentIntent
    }
  `;
  // const token = localStorage.getItem("token");
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);

  return response.data.createPaymentIntent;
}
