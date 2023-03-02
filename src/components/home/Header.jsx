import React, { useState } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import FilterByStatus from "./FilterByStatus";

const Header = ({data, set}) => {
  const [filter, setFilter] = useState(false);
  return (
    <header className="header">
      <div>
        <h1>Invoices</h1>
        <p className="color-gray">x invoices</p>
      </div>
      <div className="header__btns">
        <div className="header__filter" onClick={()=> setFilter(!filter)}>
          <h3>Filter</h3>
          <img src={arrowDown} alt="filter-arrow" />
        </div>
          {filter ? <FilterByStatus/> : null}
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
