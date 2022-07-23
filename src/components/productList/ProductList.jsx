import ProductItem from "../product/ProductItem";
import { useSelector } from "react-redux";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className={classes.productList}>
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td>Назва</td>
            <td>Опис</td>
            <td>Кількість</td>
            <td>Ціна</td>
            <td>Категорія</td>
            <td>Видалення</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
