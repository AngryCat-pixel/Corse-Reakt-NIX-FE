import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductList from "../components/productList/ProductList";
import SortButtons from "../components/sort/Sort";
import { ProductsAction } from "../store/products/actions";
import Filter from "../components/filter/Filter";
import { useEffect } from "react";
import classes from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  let [sort, setSort] = useState("");
  let [filter, setFilter] = useState("");
  let [filterType, setFilterType] = useState("name");

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    setSort(searchParams.has("sort") ? searchParams.get("sort") : "");
    setFilter(searchParams.has("filter") ? searchParams.get("filter") : "");
    setFilterType(
      searchParams.has("filterType") ? searchParams.get("filterType") : "name"
    );
  }, []);

  useEffect(() => {
    if (sort && filter && filterType) {
      setSearchParams({ sort, filter, filterType });
    } else if (sort) {
      searchParams.delete("filter");
      searchParams.delete("filterType");
      setSearchParams({ sort });
    } else if (filter) {
      searchParams.delete("sort");
      setSearchParams({ filter, filterType });
    }
  }, [sort, filter, filterType]);

  useEffect(() => {
    applySort();
  }, [sort]);

  async function changeFilter(filter) {
    setFilterType(filter.type);
    setFilter(filter.value);
  }

  function applySort() {
    if (sort === "SORT_BY_NAME_ACTION") {
      dispatch({ type: sort });
    } else if (sort === "SORT_BY_CATEGORY_ACTION") {
      dispatch({
        type: ProductsAction.SORT_BY_CATEGORY_ACTION,
        payload: { categories },
      });
    }
  }

  return (
    <>
      <div className={classes.sort_container}>
        <SortButtons setSort={setSort} />
        <Filter
          filter={{ value: filter, type: filterType }}
          changeFilter={changeFilter}
          applySort={applySort}
        />
      </div>

      <ProductList />
    </>
  );
};

export default Products;
