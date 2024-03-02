import { SERVER_URL } from "../utils/constants";
import supabase from "./supabase";

export async function checkUser(email) {
  const query = `
    query Join($email: String!) {
        join(email: $email)
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { email } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.join;
}

export async function signUp(userData) {
  const query = `
    mutation SignUp($user: UserData){
      signup(user: $user) {
        _id email firstName lastName token
      }
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { user: userData } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);

  return response.data.signup;
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
  const query = `
    query Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        _id email firstName lastName token
      }
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { email, password } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();
  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);

  return response.data.login;
}

export async function getCurrentUser() {
  const query = `
    query {
        user { _id firstName lastName email }
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

  return response.data.user;
}

export async function logout() {
  const res = await fetch(`${SERVER_URL}/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!res.ok) throw new Error(res.statusText);
}
