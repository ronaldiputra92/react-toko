import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { darkMode } from "../../context/DarkMode";

function TableCart({ products }) {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return (
          acc +
          item.qty * products.find((product) => product.id === item.id).price
        );
      }, 0);
      setTotalPrice(sum);
      // Memasukan data ke local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table
      className={`table-auto text-left w-full ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);

            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 20)}</td>
                <td>$.{product.price.toLocaleString("id-ID")}</td>
                <td>{item.qty}</td>
                <td>$.{(product.price * item.qty).toLocaleString("id-ID")}</td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>$.{totalPrice.toLocaleString("id-ID")}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableCart;
