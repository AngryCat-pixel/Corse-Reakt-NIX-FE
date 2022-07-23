import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductItem.module.css";
import {
  deleteProductAction,
  editProductAction,
} from "../../store/products/actions";
import { selectCategories } from "../../store/categories/selectors";
import { useEffect } from "react";

const ProductItem = (props) => {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const [category, setCategory] = useState(props.product?.category || "");
  const [title, setTitle] = useState(props.product?.title || "");
  const [description, setDescription] = useState(
    props.product?.description || ""
  );
  const [price, setPrice] = useState(props.product?.price || "");
  const [units, setUnits] = useState(props.product?.units || "");

  useEffect(() => {
    const product = {
      id: props.product.id,
      title,
      description,
      category,
      price,
      units,
    };
    dispatch(
      editProductAction(
        products.map((stateProduct) => {
          if (product.id === stateProduct.id) {
            return product;
          } else {
            return stateProduct;
          }
        })
      )
    );
  }, [category, title, description, price, units]);

  const onDeleteProduct = useCallback(
    (id) => {
      dispatch(deleteProductAction({ id }));
    },
    [dispatch]
  );

  return (
    <tr className={classes.product}>
      <td>{props.index + 1 || " - "}</td>
      <td>
        <input
          className={classes.product__input}
          size={title.length}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </td>

      <td>
        <input
          className={classes.product__input}
          size={description.length}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </td>
      <td>
        <input
          className={classes.product__input}
          size={price.length}
          onChange={(e) => setPrice(+e.target.value)}
          value={price}
        />
      </td>

      <td>
        <input
          className={classes.product__input}
          size={units.length}
          onChange={(e) => setUnits(+e.target.value)}
          value={units}
        />
      </td>

      <td>
        <select
          name="category"
          id="category"
          value={props.product.category}
          onChange={(e) => setCategory(parseInt(e.target.value))}
        >
          <option value="Оберіть категорію" disabled>
            -
          </option>
          {categories.map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button
          className="btn-primary"
          onClick={() => onDeleteProduct(props.product.id)}
        >
          Видалити
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
