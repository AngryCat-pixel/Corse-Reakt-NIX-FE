import React, { useState } from "react";
import classes from "./AddProductForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../../store/products/actions";
import { selectCategories } from "../../store/categories/selectors";

const AddProductForm = () => {
  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [units, setUnits] = useState(0);

  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(addProductAction({ title, description, category, price, units }));
  };

  return (
    <div className={`${classes.ModalProductAdd}`}>
      <form onSubmit={submitForm}>
        <h3>Введіть заголовок</h3>
        <input required onBlur={(e) => setTitle(e.target.value)} type="text" />

        <h3>Введіть опис</h3>
        <input onBlur={(e) => setDescription(e.target.value)} type="text" />

        <h3>Оберіть категорію</h3>
        <select
          required
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(Number(e.target.value))}
        >
          <option value="default" disabled>
            -
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <h3>Введіть ціну</h3>
        <input
          required
          onBlur={(e) => setPrice(+e.target.value)}
          type="number"
        />

        <h3>Введіть кількість</h3>
        <input
          required
          onBlur={(e) => setUnits(+e.target.value)}
          type="number"
        />

        <button>Зберегти</button>
      </form>
    </div>
  );
};

export default AddProductForm;
