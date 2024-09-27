// import FormLogin from "../Fragments/FormLogin";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { darkMode } from "../../context/DarkMode";

const AuthLayout = ({ children, type, title }) => {
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-2 right-2 p-2 text-blue-800 rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-blue-800 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-800 mb-8">
          Welcome back! Please enter your details.
        </p>
        {children}
        <p className="text-center mt-3 text-sm">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          {type === "login" ? (
            <Link to="/register" className="text-blue-800 font-bold">
              Register{" "}
            </Link>
          ) : (
            <Link to="/login" className="text-blue-800 font-bold">
              Login{" "}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
