import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/get-api",
  headers: {
    "Content-type": "application/json"
  }
});