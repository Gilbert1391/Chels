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
          name={"name"}
          label={"First Name"}
          value={value.firstName}
          onChange={onChange}
          error={error}
        />
        <InputName
          name={"name"}
          label={"Last Name"}
          value={value.lastName}
          onChange={onChange}
          error={error}
        />
      </div>
    </div>
  );
};

export default FormFlex;
