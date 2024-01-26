import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-7uc1.onrender.com",
})