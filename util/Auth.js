import axios from "axios";

const API_KEY = "AIzaSyCds7cwLpSTXqyahhe5a0BlclMKM0sjZ5s";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  const token = authenticate("signUp", email, password);
  return token;
}

export function userlogin(email, password) {
  const token = authenticate("signInWithPassword", email, password);
  return token;
}
