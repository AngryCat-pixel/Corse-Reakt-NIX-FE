import { ProductsAction } from "../../store/products/actions";
import React from "react";

const Sort = (props) => {
  return (
    <div className="main_contain">
      <button onClick={() => props.setSort(ProductsAction.SORT_BY_NAME_ACTION)}>
        Сортувати за ім'ям
      </button>
      <button
        onClick={() => props.setSort(ProductsAction.SORT_BY_CATEGORY_ACTION)}
      >
        Сортувати за категоріею
      </button>
    </div>
  );
};

export default Sort;
