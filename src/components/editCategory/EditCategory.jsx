import React, { useCallback, useState } from "react";
import { selectCategories } from "../../store/categories/selectors";
import { selectProducts } from "../../store/products/selectors";
import { useDispatch, useSelector } from "react-redux";
import { editCategoryAction } from "../../store/categories/actions";
import { editProductAction } from "../../store/products/actions";
import { useEffect } from "react";

const EditCategory = () => {
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    editCategory({ id: categoryId, name: categoryName }, selectedCategoryId);
    selectCategoryHandler(selectedCategoryId);
  };

  const editCategory = useCallback(
    (category, selectedCategoryId) => {
      dispatch(
        editCategoryAction(
          categories.map((categoryState) => {
            return categoryState.id === selectedCategoryId
              ? category
              : categoryState;
          })
        )
      );
      dispatch(
        editProductAction(
          products.map((productState) => {
            return productState.category === selectedCategoryId
              ? { ...productState, category: category.id }
              : { ...productState };
          })
        )
      );
    },
    [categories, dispatch]
  );

  function selectCategoryHandler(categoryId) {
    setSelectedCategoryId(categoryId);
    setCategoryId(categoryId);
    setCategoryName(
      categories.find((category) => category.id === categoryId).name
    );
  }

  useEffect(() => {
    if (categories && categories.length > 0) {
      selectCategoryHandler(categories[0].id);
    }
  }, [categories]);

  return (
    <div className="main_contain">
      <form onSubmit={submitForm}>
        <h3>Оберіть категорію</h3>
        <select
          name="category"
          id="category"
          value={selectedCategoryId}
          onChange={(e) => selectCategoryHandler(Number(e.target.value))}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <h3>Введіть нову назву</h3>
        <input
          required
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <h3>Введіть новый ид</h3>
        <input
          required
          type="number"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        />
        <button>Зберегти</button>
      </form>
    </div>
  );
};

export default EditCategory;
