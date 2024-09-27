import Button from "../Elements/Button/Button";
import Index from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <Index
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Fullname"
      ></Index>
      <Index
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
      ></Index>
      <Index
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      ></Index>
      <Index
        label="Confirm Password"
        name="password"
        type="password"
        placeholder="ConfirmPassword"
      ></Index>
      <Button variant="bg-blue-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
