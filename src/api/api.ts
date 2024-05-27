import axios from "axios";
import { VITE_API_URL } from "../config";

export const API = axios.create({
  baseURL: VITE_API_URL,
});
