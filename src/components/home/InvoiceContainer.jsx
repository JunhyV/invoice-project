import React from "react";
import { Link } from "react-router-dom";

const InvoiceContainer = ({data}) => {
  const {id, clientName, paymentDue, status, total} = data;
  let statusClass = "";
  let statusCircle = "";
  
  if (status === "paid") {
    statusClass = "invoice-container__status--green";
    statusCircle = "invoice-container__circle--green"; 
  }
  if (status === "pending") {
    statusClass = "invoice-container__status--yellow";
    statusCircle = "invoice-container__circle--yellow"; 
  }
  if (status === "draft") {
    statusClass = "invoice-container__status--black";
    statusCircle = "invoice-container__circle--black"; 
  }
  return (
    <Link state={data} to={`/invoice/${id}`} className="invoice-container link">
      <h3>
        <span className="color-dark-gray">#</span>{id}
      </h3>
      <p className="color-gray">{clientName}</p>
      <div>
        <p className="color-gray">Due {paymentDue}</p>
        <h2>£ {total}</h2>
      </div>
      <div className={statusClass}>
        <div className={statusCircle}/>
        <h3>{status}</h3>
      </div>
    </Link>
  );
};

export default InvoiceContainer;
