import axios from "axios";
import { jwtDecode } from "jwt-decode";

function login(data, callback) {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export default login;

export function getUsername(token) {
  try {
    const decoded = jwtDecode(token);

    return decoded.user || "Username not found";
  } catch (error) {
    return "Username not found";
  }
}
