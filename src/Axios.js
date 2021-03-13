import axios from "axios";
const instance = axios.create({
  baseURL: "https://goweb-1c5e7-default-rtdb.firebaseio.com/",
});

export default instance;
