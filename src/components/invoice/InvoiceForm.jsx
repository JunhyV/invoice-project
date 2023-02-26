import React from "react";

import ItemList from "./ItemList";

import BillTo from "./BillTo";
import BillFrom from "./BillFrom";

const InvoiceForm = () => {
  return (
    <form className="invoice-form">
      <h1>New Invoice</h1>

      <h3>Bill From</h3>
      <BillFrom />

      <h3>Bill To</h3>
      <BillTo />

      <h2>Item List</h2>
      <ItemList />
      
      <div className="invoice-form__add-item"> + Add New Item</div>
    </form>
  );
};

export default InvoiceForm;
