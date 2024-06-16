import axios from "axios";

const instance = axios.create({
  baseURL: "https://fav-book-sandy.vercel.app/books",
  timeout: 1000 * 2,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
