import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__heading">
        {label}
      </label>
      <input
        id={name}
        type="email"
        className="form__input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
