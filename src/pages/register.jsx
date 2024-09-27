import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout type="register" title="Register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
