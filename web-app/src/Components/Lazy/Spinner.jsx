import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Spinner;
