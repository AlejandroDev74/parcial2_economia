import axios from "./axios";

export const registerRequest = async (user) =>
  axios.post(`https://parcial2back-rust.vercel.app/auth/register`, user);

export const loginRequest = async (user) => axios.post(`https://parcial2back-rust.vercel.app/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`https://parcial2back-rust.vercel.app/auth/verify`);
