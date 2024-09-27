import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button/Button";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";
import { darkMode } from "../../context/DarkMode";

function Navbar() {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);
  const [totalCart, setTotalCart] = useState(0); //state untuk menampilkan total cart disebelah button
  const cart = useSelector((state) => state.cart.data); //state cart yang ada di redux

  useEffect(() => {
    //menghitung total cart
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button variant="bg-black ml-3" onClick={handleLogout}>
        Logout
      </Button>
      <Button
        variant="bg-black ml-3"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Dark Mode
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
    </div>
  );
}

export default Navbar;
