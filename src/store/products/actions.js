import { v4 as uuidv4 } from "uuid";

export const ProductsAction = {
  ADD_PRODUCT_ACTION: "ADD_PRODUCT_ACTION",
  DELETE_PRODUCT_ACTION: "DELETE_PRODUCT_ACTION",
  EDIT_PRODUCT_ACTION: "EDIT_PRODUCT_ACTION",
  SORT_BY_NAME_ACTION: "SORT_BY_NAME_ACTION",
  SORT_BY_CATEGORY_ACTION: "SORT_BY_CATEGORY_ACTION",
  FILTER_PRODUCT_BY_TITLE: "FILTER_PRODUCT_BY_TITLE",
  FILTER_PRODUCT_BY_CATEGORY: "FILTER_PRODUCT_BY_CATEGORY",
  UPDATE_PRODUCT_ACTION: "UPDATE_PRODUCT_ACTION",
};

export const addProductAction = ({
  title,
  description,
  category,
  price,
  units,
}) => {
  return {
    type: ProductsAction.ADD_PRODUCT_ACTION,
    product: {
      id: uuidv4(),
      title,
      description,
      category,
      price,
      units,
    },
  };
};
export const deleteProductAction = ({ id }) => {
  return {
    type: ProductsAction.DELETE_PRODUCT_ACTION,
    id,
  };
};
export const editProductAction = (products) => {
  return {
    type: ProductsAction.EDIT_PRODUCT_ACTION,
    products,
  };
};
