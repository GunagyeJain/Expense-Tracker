import React, { useState } from "react";
import "./styles/Cards.css";
import AddTransactionModal from "./AddTransactionModal";

const AddTransactionCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="add-transaction-card-container">
      <div className="add-transaction-card-title">+ Add Transaction</div>
      <div className="muted">Quick entry for your income, expenses, and transfers.</div>
      <div className="add-transaction-card-btn">
        <button onClick={() => setShowModal(true)}>+ Add New Transaction</button>
      </div>

      {showModal && <AddTransactionModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AddTransactionCard;
