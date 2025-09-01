import React from 'react';
import './ExpenseList.css';

const ExpenseList = () => {
  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>
      <ul>
        <li>Sample Expense 1</li>
        <li>Sample Expense 2</li>
      </ul>
    </div>
  );
};

export default ExpenseList;
