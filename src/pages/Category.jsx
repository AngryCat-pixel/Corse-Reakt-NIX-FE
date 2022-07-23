import React from "react";
import EditCategory from "../components/editCategory/EditCategory";
import DeleteCategory from "../components/deleteCategory/DeleteCategory";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <div className={classes.category_container}>
      <EditCategory />
      <DeleteCategory />
    </div>
  );
};

export default Category;
