import React from 'react';
const Input = ({ name, label, value, onChange, type }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className='form-control'
        required
      />
    </div>
  );
};

export default Input;
