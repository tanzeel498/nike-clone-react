import { SERVER_BASE_URL } from "../utils/constants";
import supabase from "./supabase";

export async function signUp(userData) {
  const res = await fetch(`${SERVER_BASE_URL}/signUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  if (!res.ok) throw new Error(res.statusText);
  const user = await res.json();
  return user;
}

export async function verifyOtp({ email, token }) {
  const res = await fetch(`${SERVER_BASE_URL}/verifyOtp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, token }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const verify = await res.json();

  if (!verify) throw new Error("Incorrect Code!");
  return verify;
}

export async function updateUser({ email, password, ...options }) {
  const { data, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { ...options },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const res = await fetch(`${SERVER_BASE_URL}/signUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) throw new Error(res.statusText);
  const user = await res.json();

  return user;
}

export async function getCurrentUser() {
  // this will fetch session object from the server
  const res = await fetch(`${SERVER_BASE_URL}/getUser`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();

  if (!data.user) return null;
  return data.user;
}
export async function checkUser(email) {
  const res = await fetch(`${SERVER_BASE_URL}/checkUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const user = await res.json();
  if (user === null) throw new Error("User does not exists");
  return user;
}

export async function logout() {
  const res = await supabase.auth.signOut();
  if (!res.ok) throw new Error(res.statusText);
}
