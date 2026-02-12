import axios from "axios";

const APIClient = axios.create({
  baseURL: "https://anniversary-avoid-via-butterfly.trycloudflare.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default APIClient;