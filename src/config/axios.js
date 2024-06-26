import axios from "axios";
// baseURL: "http://localhost:5002/books/",

const instance = axios.create({
  baseURL: "https://book-track-api.vercel.app/books",
  // timeout: 1000 * 2,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

export default instance;
