import {
  ADD_CATEGORY_ACTION,
  DELETE_CATEGORY_ACTION,
  EDIT_CATEGORY_ACTION,
} from "./actions";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Монітор",
    },
    {
      id: 2,
      name: "Миша",
    },
    {
      id: 3,
      name: "Відеокарта",
    },
    {
      id: 4,
      name: "Клавіатура",
    },
  ],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_ACTION:
      return { ...state, categories: [...state.categories, action.category] };
    case EDIT_CATEGORY_ACTION:
      return { ...state, categories: action.categories };
    case DELETE_CATEGORY_ACTION:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.id
        ),
      };
    default:
      return state;
  }
};
