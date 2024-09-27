import axios from "axios";

function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getProducts;

export function getDetailProduct(id, callback) {
  //Setelah ini bikin useEffect di detailProduct
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
