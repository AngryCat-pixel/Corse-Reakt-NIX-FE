import { v4 as uuidv4 } from "uuid";

export const ADD_CATEGORY_ACTION = "ADD_CATEGORY_ACTION";
export const EDIT_CATEGORY_ACTION = "EDIT_CATEGORY_ACTION";
export const DELETE_CATEGORY_ACTION = "DELETE_CATEGORY_ACTION";

export const addCategoryAction = ({ name }) => {
  return {
    type: ADD_CATEGORY_ACTION,
    category: {
      id: uuidv4(),
      name,
    },
  };
};
export const editCategoryAction = (categories) => {
  return {
    type: EDIT_CATEGORY_ACTION,
    categories,
  };
};
export const deleteCategoryAction = ({ id }) => {
  return {
    type: DELETE_CATEGORY_ACTION,
    id,
  };
};
