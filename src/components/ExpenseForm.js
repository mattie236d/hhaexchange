import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form>
        <div>
          <label>Date:</label>
          <input type="date" />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" step="0.01" />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" />
        </div>
        <button type="submit">Submit Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
