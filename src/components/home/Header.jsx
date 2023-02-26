import React from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";

const Header = ({data, set}) => {
  return (
    <header className="header">
      <div>
        <h1>Invoices</h1>
        <p className="color-gray">x invoices</p>
      </div>
      <div className="header__btns">
        <div className="header__filter">
          <h3>Filter</h3>
          <img src={arrowDown} alt="filter-arrow" />
        </div>
        <button className="header__btn" onClick={() => set(!data)}>
          <div className="header__plus">
            <img src={plus} alt="btn-plus" />
          </div>
          <h3>New</h3>
        </button>
      </div>
    </header>
  );
};

export default Header;
