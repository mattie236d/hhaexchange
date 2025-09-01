import React from 'react';
import './Receipt.css';

const Receipt = () => {
  return (
    <div className="receipt-container">
      <h2>Receipts</h2>
      <p>Manage and upload your digital receipts here.</p>
      <input type="file" />
    </div>
  );
};

export default Receipt;
