import axios from "axios";

const _nonAuthHttp = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default _nonAuthHttp;
