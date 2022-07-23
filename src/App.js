import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TotalPrice from "./components/totalPrice/TotalPrice";

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <Link to={`/`}>Главная</Link>
        <Link to={`/add-product`}>Додати продукт</Link>
        <Link to={`/category`}>Категории</Link>
        <TotalPrice />
      </nav>

      <div className="line"></div>
      <div className="container">
        <div className="wrap">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
