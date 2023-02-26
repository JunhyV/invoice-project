import React from "react";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import InvoiceForm from "./InvoiceForm";

const Invoice = ({ data, set }) => {
  return (
    <div className="invoice">
      <button className="invoice__close-btn" onClick={() => set(!data)}>
        <img src={arrowLeft} alt="left-arrow" />
        <h3 className="darkmode__h3">Go back</h3>
      </button>
      <InvoiceForm />
      <div className="invoice__down-gradient"/>
      <footer className="invoice__footer">
        <button className="invoice__discard">Discard</button>
        <button className="invoice__draft">Save as Draft</button>
        <button className="invoice__save">Save & Send</button>
      </footer>
    </div>
  );
};

export default Invoice;
