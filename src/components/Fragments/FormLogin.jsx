import Index from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import login from "../../services/auth.service";
import { useState } from "react";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    // Untuk menangkap event
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <Index
          label="Username"
          name="username"
          type="text"
          placeholder="Username"
        ></Index>
        <Index
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
        ></Index>
        <Button variant="bg-blue-700 w-full" type="submit">
          Login
        </Button>
        {loginFailed && (
          <p className="text-red-600 text-center mt-5">{loginFailed}</p>
        )}
      </form>
    </>
  );
};

// johnd
// m38rmF$
export default FormLogin;
