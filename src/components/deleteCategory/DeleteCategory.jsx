import React from "react";
import { selectCategories } from "../../store/categories/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/products/selectors";
import { deleteCategoryAction } from "../../store/categories/actions";
import classes from "./DeleteCategory.module.css";

const EditCategory = () => {
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  function deleteAction(id) {
    const filterProducts = products.filter(
      (product) => product.category === id
    );
    if (filterProducts.length)
      return alert(`Спочатку видаліть товари з цієї категорії: ${id}`);

    dispatch(deleteCategoryAction({ id }));
  }

  return (
    <div className={`main_contain ${classes.DeleteCategory}`}>
      <h3>Категорії</h3>
      <table>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <button onClick={() => deleteAction(category.id)}>
                    Видалити
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditCategory;
