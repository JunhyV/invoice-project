import React, { useState } from "react";
import check from "../../assets/icon-check.svg";

const FilterByStatus = () => {
  const [draftCheck, setDraftCheck] = useState(false);
  const [pendingCheck, setPendingCheck] = useState(false);
  const [paidCheck, setPaidCheck] = useState(false);

  const handleDraft = () => {
    setDraftCheck(!draftCheck);
    setPendingCheck(false);
    setPaidCheck(false);
  }
  const handlePending = () => {
    setDraftCheck(false);
    setPendingCheck(!pendingCheck);
    setPaidCheck(false);
  }
  const handlePaid = () => {
    setDraftCheck(false);
    setPendingCheck(false);
    setPaidCheck(!paidCheck);
  }
  return (
    <div className="filter-by-status">
      <button
        className="filter-by-status__btn"
        onClick={handleDraft}
      >
        <div className="filter-by-status__square">
          {draftCheck ? (
            <img className="check" src={check} alt="check-img" />
          ) : null}
        </div>
        <h3>Draft</h3>
      </button>
      <button
        className="filter-by-status__btn"
        onClick={handlePending}
      >
        <div className="filter-by-status__square">
          {pendingCheck ? (
            <img className="check" src={check} alt="check-img" />
          ) : null}
        </div>
        <h3>Pending</h3>
      </button>
      <button
        className="filter-by-status__btn"
        onClick={handlePaid}
      >
        <div className="filter-by-status__square">
          {paidCheck ? (
            <img className="check" src={check} alt="check-img" />
          ) : null}
        </div>
        <h3>Paid</h3>
      </button>
    </div>
  );
};

export default FilterByStatus;
