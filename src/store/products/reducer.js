import { v4 as uuidv4 } from "uuid";
import { ProductsAction } from "./actions";

const initialState = {
  products: [
    {
      id: uuidv4(),
      title: 'Б-Монітор 27" Dell S2722QC',
      description:
        "Монітор 27 Dell S2722QC (210-BBRQ) 8-Bit+FRC / USB Type-C Power Delivery 65W",
      category: 1,
      price: 15499,
      units: 10,
    },
    {
      id: uuidv4(),
      title: 'Монітор 27" Samsung Odyssey',
      description:
        '"Монітор 27" Samsung Odyssey G5 LC27G55T Black (LC27G55TQWIXCI)',
      category: 1,
      price: 9999,
      units: 15,
    },
    {
      id: uuidv4(),
      title: 'А-Монітор 49" Samsung Odyssey Neo',
      description:
        'Монітор 49" Samsung Odyssey Neo G9 S49AG95 (LS49AG950NIXCI)',
      category: 1,
      price: 59999,
      units: 5,
    },
    {
      id: uuidv4(),
      title: "Razer Viper Ultimate Wireless & Mouse Dock",
      description:
        "Миша Razer Viper Ultimate Wireless & Mouse Dock (RZ01-03050100-R3G1)",
      category: 2,
      price: 4599,
      units: 200,
    },
    {
      id: uuidv4(),
      title: "Xtrfy MZ1 RGB USB White",
      description: "Миша Xtrfy MZ1 RGB USB White (XG-MZ1-WHITE-RGB)",
      category: 2,
      price: 2999,
      units: 4,
    },
    {
      id: uuidv4(),
      title: "GeForce RTX 3090 iChill",
      description:
        "INNO3D PCI-Ex GeForce RTX 3090 iChill X4 24GB GDDR6X (384bit) (1755/19500) (HDMI, 3 x DisplayPort) (C30904-246XX-1880VA36)",
      category: 3,
      price: 72009,
      units: 6,
    },
    {
      id: uuidv4(),
      title: "GeForce RTX 3080 Ti iChill",
      description:
        "INNO3D PCI-Ex GeForce RTX 3080 Ti iChill X4 12GB GDDR6X (384bit) (1710/19000) (HDMI, 3 x DisplayPort) (C308T4-126XX-1810VA36)",
      category: 3,
      price: 58899,
      units: 11,
    },
    {
      id: uuidv4(),
      title: "Radeon RX 6900 XT Phantom Gaming",
      description:
        "ASRock PCI-Ex Radeon RX 6900 XT Phantom Gaming D 16G OC 16GB GDDR6 (256bit) (1925/16000) (HDMI, 3 x DisplayPort) (RX6900XT PGD 16GO)",
      category: 3,
      price: 48239,
      units: 2,
    },
    {
      id: uuidv4(),
      title: "SteelSeries Apex Pro",
      description: "Клавіатура дротова SteelSeries Apex Pro USB (SS64626)",
      category: 4,
      price: 8999,
      units: 44,
    },
    {
      id: uuidv4(),
      title: "SteelSeries Apex Pro",
      description: "Клавіатура дротова SteelSeries Apex Pro TKL USB (SS64734)",
      category: 4,
      price: 7999,
      units: 55,
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductsAction.ADD_PRODUCT_ACTION:
      initialState.products = [...initialState.products, action.product];
      return { ...state, products: [...state.products, action.product] };
    case ProductsAction.DELETE_PRODUCT_ACTION:
      const filtredProducts = [...state.products].filter(
        (product) => product.id !== action.id
      );
      initialState.products = [...filtredProducts];
      return {
        ...state,
        products: [...filtredProducts],
      };
    case ProductsAction.EDIT_PRODUCT_ACTION:
      return { ...state, products: action.products };
    case ProductsAction.SORT_BY_NAME_ACTION:
      return {
        ...state,
        products: [...state.products].sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    case ProductsAction.SORT_BY_CATEGORY_ACTION: {
      // create a map with category names by id
      let categoriesNameById = {};
      action.payload.categories.forEach((category) => {
        categoriesNameById[category.id] = category.name;
      });
      // sort products by category name
      const sortedProducts = [...state.products].sort((a, b) =>
        categoriesNameById[a.category].localeCompare(
          categoriesNameById[b.category]
        )
      );
      return {
        ...state,
        products: [...sortedProducts],
      };
    }
    case ProductsAction.FILTER_PRODUCT_BY_CATEGORY:
      if (action.payload.filter === "") {
        return { ...state, products: [...initialState.products] };
      }
      // create a map with category names by id
      let categoriesNameById = {};
      action.payload.categories.forEach((category) => {
        if (
          category.name
            .toLowerCase()
            .includes(action.payload.filter.toLowerCase())
        ) {
          categoriesNameById[category.id] = category.name;
        }
      });
      // filter products
      const filteredProducts = [...initialState.products].filter(
        (product) => categoriesNameById[product.category]
      );

      return {
        ...state,
        products: filteredProducts,
      };
    case ProductsAction.FILTER_PRODUCT_BY_TITLE:
      return {
        ...state,
        products:
          action.payload.filter === ""
            ? [...initialState.products]
            : [...initialState.products].filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(action.payload.filter.toLowerCase())
              ),
      };
    default:
      return state;
  }
};
