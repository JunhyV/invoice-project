import React from "react";
import { Link } from "react-router-dom";

const InvoiceContainer = () => {
  return (
    <Link to='/invoice' className="invoice-container link">
      <h3>
        <span className="color-dark-gray">#</span>RT3080
      </h3>
      <p className="color-gray">Jensen Huang</p>
      <div>
        <p className="color-gray">Due 19 Aug 2021</p>
        <h2>£ 1,800.90</h2>
      </div>
      <div className="invoice-container__status--green">
        <div className="invoice-container__circle--green"></div>
        <h3>Paid</h3>
      </div>
    </Link>
  );
};

export default InvoiceContainer;
