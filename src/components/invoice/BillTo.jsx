import React, { useState } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import calendarIcon from "../../assets/icon-calendar.svg";
import Calendar from "./Calendar";
import Payment from "./Payment";

const BillTo = () => {
  const [payment, setPayment] = useState(false);
  const [calendar, setCalendar] = useState(false);
  return (
    <div className="invoice-form__bill-to">
      <div className="invoice-form__input-container">
        <label>Client's Name</label>
        <input type="name"  />
      </div>
      {/* Client's Name */}

      <div className="invoice-form__input-container">
        <label>Client's Email</label>
        <input type="email"  />
      </div>
      {/* Client's Email */}

      <div className="invoice-form__input-container">
        <label>Street Address</label>
        <input type="street"  />
      </div>
      {/* Street Address */}

      <div className="invoice-form__input-container">
        <label>City</label>
        <input type="city"  />
      </div>
      {/* City */}

      <div className="invoice-form__input-container">
        <label>Post Code</label>
        <input type="zip"  />
      </div>
      {/* Post Code */}

      <div className="invoice-form__input-container">
        <label>Country</label>
        <input type="country"  />
      </div>
      {/* Country */}

      <div className="invoice-form__input-container input-date">
        <label>Invoice Date</label>
        <div className="invoice-form__fake-input" onClick={() => setCalendar(!calendar)}>
          <p></p>
            <img src={calendarIcon} alt="calendar-img" />
        </div>
        {calendar ? <Calendar/> : null}
      </div>
      {/* Invoice Date */}

      <div className="invoice-form__input-container input-text">
        <label>Payment Terms</label>
        <div className="invoice-form__fake-input" onClick={()=>setPayment(!payment)}>
          Select Option <img src={arrowDown} alt="filter-arrow" />
        </div>
        {payment ? <Payment data={payment} set={setPayment}/> : null}
        
      </div>
      {/* Payment Terms */}

      <div className="invoice-form__input-container">
        <label>Project Description</label>
        <input type="text"  />
      </div>
      {/* Project Description */}
    </div>
  );
};

export default BillTo;
