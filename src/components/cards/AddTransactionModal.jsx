import React, { useState } from "react";
import { Link } from "react-router-dom";

// Firebase
import { addTransaction } from "../../services/transactionService";

// Custom Hook
import useAuth from "../../hooks/useAuth";

// CSS
import "./styles/AddTransactionModal.css";

const AddTransactionModal = ({ onClose }) => {
  const user = useAuth(); // undefined (loading), null (logged out), object (logged in)

  // ✅ Declare hooks first
  const [form, setForm] = useState({
    note: "",
    amount: "",
    type: "expense",
    category: "",
    customCategory: "",
  });

  // ⏳ Wait until auth status is determined
  if (user === undefined) {
    return null; // Or show a loading spinner if you prefer
  }

  // 🚫 Not logged in
  if (!user) {
    return (
      <div className="modal-backdrop">
        <div className="modal-content not-logged-in">
          <p>You must be logged in to add a transaction.</p>
          <Link to="/login">
            <button>Login / Signup</button>
          </Link>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  // ✅ Logged in — handle changes and submit
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalTransaction = {
      ...form,
      category: form.customCategory ? form.customCategory : form.category,
    };

    try {
      await addTransaction(finalTransaction);
      onClose();
    } catch (err) {
      console.error("Error adding transaction:", err.message);
      alert("You must be logged in to add a transaction.");
    }
  };


  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Add Transaction</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="note"
            placeholder="Note"
            onChange={handleChange}
            value={form.note}
            required
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            onChange={handleChange}
            value={form.amount}
            required
          />
          <select name="type" onChange={handleChange} value={form.type}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required={!form.customCategory}
          >
            <option value="">Select Category</option>
            {form.type === "income" ? (
              <>
                <option value="Salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Investment">Investment</option>
                <option value="Other">Other</option>
              </>
            ) : (
              <>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
              </>
            )}
          </select>

          <input
            type="text"
            name="customCategory"
            placeholder="Or enter custom category"
            value={form.customCategory}
            onChange={handleChange}
          />

          <button type="submit">Add</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddTransactionModal;
