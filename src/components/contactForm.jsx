import React, { Component } from "react";
import Input from "./common/input";

class ContactForm extends Component {
  state = {
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: target }) => {
    const contact = { ...this.state.contact };
    contact[target.name] = target.value;
    this.setState({ contact });
  };

  render() {
    const { contact } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label htmlFor="name" className="form__heading">
            Name *
          </label>
          <div className="form__flex">
            <div className="form__flex--names">
              <input
                id="name"
                type="text"
                className="form__input"
                name={"firstName"}
                value={contact.firstName}
                onChange={this.handleChange}
              />
              <label className="form__caption">First Name</label>
            </div>
            <div className="form__flex--names">
              <input
                id="name"
                type="text"
                className="form__input"
                name={"lastName"}
                value={contact.lastName}
                onChange={this.handleChange}
              />
              <label className="form__caption">Last Name</label>
            </div>
          </div>
        </div>
        <Input
          name={"email"}
          label={"Email *"}
          value={contact.email}
          onChange={this.handleChange}
        />
        <Input
          name={"subject"}
          label={"Subject *"}
          value={contact.email}
          onChange={this.handleChange}
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
