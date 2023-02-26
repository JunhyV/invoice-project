import React from "react";
import dlt from "../../assets/icon-delete.svg";

const ItemList = () => {
  return (
    <div className="invoice-form__item-list">
      <div className="invoice-form__input-container">
        <label>Item Name</label>
        <input type="text" placeholder="Item Name" />
      </div>
      <div className="invoice-form__input-container">
        <label>Quantity</label>
        <input type="number" placeholder="0" />
      </div>
      <div className="invoice-form__input-container">
        <label>Price</label>
        <input type="number" placeholder="0.00" />
      </div>
      <div className="invoice-form__input-container">
        <label>Total</label>
        <input type="text"  placeholder="$10.00"/>
      </div>
      <img src={dlt} alt="delete" />
    </div>
  );
};

export default ItemList;
