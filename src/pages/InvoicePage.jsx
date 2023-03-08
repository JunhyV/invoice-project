import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";

const Invoice = () => {
  const pathId = useLocation().pathname.slice(9);
  const data = useSelector((state) => state.invoiceState.invoices);
  const filterData = data.filter((invoice) => invoice.id === pathId);
  const {
    status,
    id,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientEmail,
    clientAddress,
    items,
    total,
  } = filterData[0];
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
    <div className="invoice-data">
      <Link to="/" className="invoice-data__link link">
        <img src={arrowLeft} alt="left-arrow" />
        <h3 className="invoice-data__back">Go Back</h3>
      </Link>
      <div className="invoice-data__status">
        <p>Status</p>
        <div className={statusClass}>
          <div className={statusCircle} />
          <h3>{status}</h3>
        </div>
      </div>
      {/* Status */}
      <div className="invoice-data__content">
        <div className="invoice-data__first-content">
          <div>
            <h3>
              <span className="color-gray">#</span>
              {id}
            </h3>
            <p>{description}</p>
          </div>
          {/* Id */}

          <div>
            <div>
              <p>{senderAddress.street}</p>
              <p>{senderAddress.city}</p>
              <p>{senderAddress.postCode}</p>
              <p>{senderAddress.country}</p>
            </div>
            {/* Sender Data */}
          </div>

          <div className="invoice-data__second-content">
            <div>
              <p>Invoice Date</p>
              <h2>{createdAt}</h2>
            </div>
            <div>
              <p>Bill To</p>
              <h2>{clientName}</h2>
            </div>
            <div>
              <p>Payment Due</p>
              <h2>{paymentDue}</h2>
            </div>
            <div>
              <p>{clientAddress.street}</p>
              <p>{clientAddress.city}</p>
              <p>{clientAddress.postCode}</p>
              <p>{clientAddress.country}</p>
            </div>
            <div>
              <p>Sent to</p>
              <h2>{clientEmail}</h2>
            </div>
          </div>
          {/* Client Data */}

          <div className="invoice-data__third-content">
            {items.map((item) => (
              <div className="invoice-data__item">
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} x £ {parseFloat(item.price).toFixed(2)}
                </p>
                <h3>£ {parseFloat(item.total).toFixed(2)}</h3>
              </div>
            ))}
            <div className="invoice-data__total">
              <p>Grand Total</p>
              <h1>£ {parseFloat(total).toFixed(2)}</h1>
            </div>
          </div>
          {/*Items*/}
        </div>
      </div>

      <footer className="invoice-data__btns">
        <button className="invoice-data__edit">Edit</button>
        <button className="invoice-data__delete">Delete</button>
        <button className="invoice-data__mark">Mark as Paid</button>
      </footer>
    </div>
  );
};

export default Invoice;
