import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import InputName from "./inputName";

class ContactForm extends Component {
  state = {
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email"),
    subject: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Subject")
  };

  validate = () => {
    const result = Joi.validate(this.state.contact, this.schema, {
      abortEarly: false
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: target }) => {
    const contact = { ...this.state.contact };
    contact[target.name] = target.value;
    this.setState({ contact });
  };

  render() {
    const { contact, errors } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label htmlFor="name" className="form__heading">
            Name *
          </label>
          <div className="form__flex">
            <InputName
              name={"name"}
              label={"First Name"}
              value={contact.firstName}
              onChange={this.handleChange}
              error={errors.firstName}
            />
            <InputName
              name={"name"}
              label={"Last Name"}
              value={contact.lastName}
              onChange={this.handleChange}
              error={errors.lastName}
            />
          </div>
        </div>
        <Input
          name={"email"}
          label={"Email *"}
          value={contact.email}
          onChange={this.handleChange}
          error={errors.email}
        />
        <Input
          name={"subject"}
          label={"Subject *"}
          value={contact.subject}
          onChange={this.handleChange}
          error={errors.subject}
        />
        <div className="form__group">
          <label htmlFor="message" className="form__heading">
            Message *
          </label>
          <textarea
            id="message"
            className="form__input"
            rows="6"
            name={"message"}
            value={contact.message}
            onChange={this.handleChange}
          />
        </div>
        <div className="form__group">
          <button className="btn btn--form">Submit</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
