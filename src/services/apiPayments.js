import { SERVER_BASE_URL } from "../utils/constants";

export async function getPaymentDetails() {
  const res = await fetch(`${SERVER_BASE_URL}/payment`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);

  const payment = await res.json();
  return payment;
}

export async function updatePayment(data) {
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
