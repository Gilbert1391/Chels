import React from "react";
import InputName from "./inputs/inputName";

const FormFlex = ({ value, onChange, error }) => {
  return (
    <div className="form__group">
      {error && (
        <div className="form__alert">
          <i className="fa fa-times form__alert--icon" />
          {error}
        </div>
      )}
      <label htmlFor="name" className="form__heading">
        Name *
      </label>
      <div className="form__flex">
        <InputName
          name={"firstName"}
          label={"First Name"}
          value={value.firstName}
          onChange={onChange}
        />
        <InputName
          name={"lastName"}
          label={"Last Name"}
          value={value.lastName}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormFlex;
