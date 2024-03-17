import { SERVER_URL } from "../utils/constants";

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

export async function forgotPassword(email) {
  const query = `
    mutation ForgotPassword($email: String!) {
        forgotPassword(email: $email)
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
  return response.data.forgotPassword;
}

export async function resetPassword({ email, code, newPassword }) {
  const query = `
    mutation ResetPassword($email: String!, $code: Int!, $newPassword: String!) {
        resetPassword(email: $email, newPassword: $newPassword, code: $code)
    }
  `;
  const res = await fetch(SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { code, newPassword, email } }),
  });

  if (!res.ok) throw new Error(res.statusText);
  const response = await res.json();

  // throw error if error is received in response
  if (response.errors) throw new Error(response.errors.at(0).message);
  return response.data.resetPassword;
}

export async function signUp(userData) {
  const query = `
    mutation SignUp($user: UserData){
      signup(user: $user) {
        _id email firstName lastName dob token
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

export async function updateUser(data) {
  const query = `
    mutation UpdateUser($data: UserUpdateData! ) {
      updateUser(data: $data) {
        _id email firstName lastName dob
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

  return response.data.updateUser;
}

export async function login({ email, password }) {
  const query = `
    query Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        _id email firstName lastName token dob
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
        user { _id firstName lastName email dob }
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
  if (response.errors?.at(0)?.message === "No User found!") return null;

  return response.data.user;
}
