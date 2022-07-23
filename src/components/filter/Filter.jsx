import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductsAction } from "../../store/products/actions";

const Filter = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    if (props.filter.type === "title") {
      dispatch({
        type: ProductsAction.FILTER_PRODUCT_BY_TITLE,
        payload: { filter: props.filter.value },
      });
      props.applySort();
    } else if (props.filter.type === "category") {
      dispatch({
        type: ProductsAction.FILTER_PRODUCT_BY_CATEGORY,
        payload: { categories, filter: props.filter.value },
      });
      props.applySort();
    }
  }, [props.filter.value]);

  function onFilterByCategory(value) {
    props.changeFilter({ type: "category", value });
  }

  function onFilterByTitle(value) {
    props.changeFilter({ type: "title", value });
  }

  return (
    <div className={`main_contain`}>
      <label htmlFor="filterName">
        <h3>Фільтрувати за назвою(URL)</h3>
      </label>
      <input
        id="filterName"
        value={props.filter.type === "title" ? props.filter.value : ""}
        type="text"
        onChange={(e) => onFilterByTitle(e.target.value)}
      />

      <label htmlFor="filterCategory">
        <h3>Сортувати по категорії</h3>
      </label>

      <input
        id="filterCategory"
        value={props.filter.type === "category" ? props.filter.value : ""}
        type="text"
        onChange={(e) => onFilterByCategory(e.target.value)}
      />
    </div>
  );
};

export default Filter;
