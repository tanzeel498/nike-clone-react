import supabase from "./supabase";

export async function signUp({ password, email }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (data.user?.identities.length === 0)
    throw new Error("User Already exists");
  else if (error) throw new Error(error.message);

  return data;
}

export async function verifyOtp({ email, token }) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) throw new Error(error.message);
  return data;
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
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getSession();

  if (!data.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
