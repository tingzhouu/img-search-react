import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4d3f810fc5b6d04820b9d3a1dfb49be90f9f6e2d6012886131a4b8caa3457cec"
  }
});