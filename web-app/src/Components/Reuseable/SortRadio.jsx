import React from 'react';
import './SortRadio.css';

const SortRadio = ({ label, type, onChange, checked, value }) => {
  return (
    <div className="sort-input-radio">
      <p>{label}</p>
      <label className="custom-radio">
        <input
          type={type}
          name="sortOption"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="radio-mark"></span>
      </label>
    </div>
  );
};

export default SortRadio;
