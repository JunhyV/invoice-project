import React from "react";
import arrowDown from "../assets/icon-arrow-down.svg";
import plus from "../assets/icon-plus.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Invoices</h1>
        <p>x invoices</p>
      </div>
      <div className="header__btns">
        <div className="header__filter">
          <p>Filter by status</p> 
          <img src={arrowDown} alt="filter-arrow" />
        </div>
        <button className="header__btn">
          <div className="header__plus">
            <img src={plus} alt="btn-plus" />
          </div>
          <p> New Invoice</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
