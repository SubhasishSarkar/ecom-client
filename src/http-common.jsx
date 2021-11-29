import axios from "axios";

export default axios.create({
  baseURL: "https://squareboatecomserver.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});
