import React from "react";

const TextArea = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form__group">
      {error && (
        <div className="form__alert">
          <i className="fa fa-times form__alert--icon" />
          {error}
        </div>
      )}
      <label htmlFor="message" className="form__heading">
        {label}
      </label>
      <textarea
        id={name}
        className="form__input"
        rows="6"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
