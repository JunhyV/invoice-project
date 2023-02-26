import React from "react";

const BillFrom = () => {
  return (
    <div className="invoice-form__bill-from">
      <div className="invoice-form__input-container">
        <label>Street Address</label>
        <input type="street" placeholder="Address" />
      </div>
      <div className="invoice-form__input-container">
        <label>City</label>
        <input type="city" placeholder="City" />
      </div>
      <div className="invoice-form__input-container">
        <label>Post Code</label>
        <input type="zip" placeholder="Post Code" />
      </div>
      <div className="invoice-form__input-container">
        <label>Country</label>
        <input type="country" placeholder="Country" />
      </div>
    </div>
  );
};

export default BillFrom;
