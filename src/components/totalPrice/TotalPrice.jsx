import classes from "./TotalPrice.module.css";
import { useSelector } from "react-redux";

const TotalPrice = (props) => {
  let products = useSelector((state) => state.products.products);
  return (
    <div className={`${classes.TotalPrice}`}>
      <h3>Total Price</h3>
      <p>
        {products.reduce(
          (acc, product) => acc + product.price * product.units,
          0
        )}
      </p>
    </div>
  );
};

export default TotalPrice;
