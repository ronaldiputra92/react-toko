import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout type="login" title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
