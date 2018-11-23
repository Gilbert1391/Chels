import React from "react";

const InputName = ({ name, label, value, onChange }) => {
  return (
    <div className="form__flex--names">
      <input
        id={name}
        type="text"
        className="form__input"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className="form__caption">{label}</label>
    </div>
  );
};

export default InputName;
