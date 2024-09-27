import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slice/cartSlice";

function CardProduct({ children }) {
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-500 shadow-md rounded px-8 pt-6 pb-5 mb-4 mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header({ images, id }) {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={images}
        alt="products"
        className="p-2 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
}

function Body({ name, children }) {
  return (
    <div className="px-3 h-full">
      <a href="">
        <h5 className="text-xl font-semi-bold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
        <p className="font-normal text-sm text-gray-400">
          {children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center px-3 mt-4">
      <span className="text-md font-bold text-white">
        $.
        {price.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </span>
      {/* <Button
        variant="bg-blue-600 text-[14px]"
        onClick={() => handleAddToCart(id)}
      >
        Add to cart
      </Button> */}

      {/* Jika menggunakan redux */}
      <Button
        variant="bg-blue-600 text-[14px]"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
