import { SERVER_BASE_URL } from "../utils/constants";

export async function getAddress() {
  const res = await fetch(`${SERVER_BASE_URL}/address`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const address = await res.json();
  return address;
}

export async function updateAddress(data) {
  const res = await fetch(`${SERVER_BASE_URL}/address`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const address = await res.json();
  return address;
}

export async function getPaymentDetails() {
  const res = await fetch(`${SERVER_BASE_URL}/payment`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const payment = await res.json();
  return payment;
}

export async function addPayment(data) {
  const res = await fetch(`${SERVER_BASE_URL}/payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const payment = await res.json();
  return payment;
}
