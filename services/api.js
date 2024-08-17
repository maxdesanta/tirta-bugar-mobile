import axios from "axios";

// inisiasi link api
export const api = axios.create({
    baseURL:  process.env.EXPO_PUBLIC_API_URL
});
