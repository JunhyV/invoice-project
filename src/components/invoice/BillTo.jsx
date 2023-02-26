import React, { useState } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import calendar from "../../assets/icon-calendar.svg";
import Payment from "./Payment";

const BillTo = () => {
  const [payment, setPayment] = useState(false)
  return (
    <div className="invoice-form__bill-to">
      <div className="invoice-form__input-container">
        <label>Client's Name</label>
        <input type="name" placeholder="Client's Name" />
      </div>
      {/* Client's Name */}

      <div className="invoice-form__input-container">
        <label>Client's Email</label>
        <input type="email" placeholder="email@gmail.com" />
      </div>
      {/* Client's Email */}

      <div className="invoice-form__input-container">
        <label>Street Address</label>
        <input type="street" placeholder="Address" />
      </div>
      {/* Street Address */}

      <div className="invoice-form__input-container">
        <label>City</label>
        <input type="city" placeholder="City" />
      </div>
      {/* City */}

      <div className="invoice-form__input-container">
        <label>Post Code</label>
        <input type="zip" placeholder="Post Code" />
      </div>
      {/* Post Code */}

      <div className="invoice-form__input-container">
        <label>Country</label>
        <input type="country" placeholder="Country" />
      </div>
      {/* Country */}

      <div className="invoice-form__input-container input-date">
        <label>Invoice Date</label>
        <div className="invoice-form__fake-input">
          21 Aug 2021
            <img src={calendar} alt="calendar-img" />
        </div>
      </div>
      {/* Invoice Date */}

      <div className="invoice-form__input-container input-text">
        <label>Payment Terms</label>
        <div className="invoice-form__fake-input" onClick={()=>setPayment(!payment)}>
          Select Option <img src={arrowDown} alt="filter-arrow" />
        </div>
        {payment ? <Payment/> : null}
        
      </div>
      {/* Payment Terms */}

      <div className="invoice-form__input-container">
        <label>Project Description</label>
        <input type="text" placeholder="Graphic Design Service" />
      </div>
      {/* Project Description */}
    </div>
  );
};

export default BillTo;
