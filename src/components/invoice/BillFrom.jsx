import React from "react";

const BillFrom = () => {
  return (
    <div className="invoice-form__bill-from">
      <div className="invoice-form__input-container">
        <label>Street Address</label>
        <input type="street" />
      </div>
      <div className="invoice-form__input-container">
        <label>City</label>
        <input type="city" />
      </div>
      <div className="invoice-form__input-container">
        <label>Post Code</label>
        <input type="zip" />
      </div>
      <div className="invoice-form__input-container">
        <label>Country</label>
        <input type="country" />
      </div>
    </div>
  );
};

export default BillFrom;
