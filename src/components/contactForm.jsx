import React, { Component } from "react";
import Joi from "joi-browser";
import FormFlex from "./formFlex";
import Input from "./inputs/input";
import TextArea from "./inputs/textArea";

class ContactForm extends Component {
  state = {
    contact: {
      name: { firstName: "", lastName: "" },
      email: "",
      subject: "",
      message: ""
    },
    errors: {}
  };

  schema = {
    name: {
      firstName: Joi.string()
        .max(50)
        .label("Name")
        .required(),
      lastName: Joi.string()
        .max(50)
        .label("Name")
        .required()
    },
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    subject: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Subject"),
    message: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Message")
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.contact, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
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
    // if (target.name === "firstName" || target.name === "lastName") {
    //   contact.name[target.name] = target.value;
    // }
    contact[target.name] = target.value;
    this.setState({ contact });
  };

  handleNamesChange = ({ currentTarget: target }) => {
    const contact = { ...this.state.contact };
    contact.name[target.name] = target.value;
    this.setState({ contact });
  };

  render() {
    const { contact, errors } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormFlex
          value={contact.name}
          onChange={this.handleNamesChange}
          error={errors.name}
        />
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
        <TextArea
          name={"message"}
          label={"Message *"}
          value={contact.message}
          onChange={this.handleChange}
          error={errors.message}
        />
        <div className="form__group">
          <button className="btn btn--form">Submit</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
