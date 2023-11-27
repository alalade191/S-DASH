import axios from "axios";
export const transaction = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
