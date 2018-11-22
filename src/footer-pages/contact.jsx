import React from "react";

const Contact = () => {
  return (
    <section className="padding-footer-page">
      <h2 className="heading-secondary heading-secondary--footer-page">
        Inquiries + Comments
      </h2>
      <div className="form">
        <form method="post" action="#">
          <div className="form__group">
            <label for="name" className="form__heading">
              Name *
            </label>
            <div className="form__flex">
              <div className="form__flex--names">
                <input id="name" type="text" className="form__input" required />
                <label className="form__caption">First Name</label>
              </div>

              <div className="form__flex--names">
                <input id="name" type="text" className="form__input" required />
                <label className="form__caption">Last Name</label>
              </div>
            </div>
          </div>
          <div className="form__group">
            <label for="email" className="form__heading">
              Email *
            </label>
            <input id="email" type="email" className="form__input" required />
          </div>
          <div className="form__group">
            <label for="subject" className="form__heading">
              Subject *
            </label>
            <input id="subject" type="text" className="form__input" required />
          </div>
          <div className="form__group">
            <label for="message" className="form__heading">
              Message *
            </label>
            <textarea id="message" className="form__input" rows="6" required />
          </div>
          <div className="form__group">
            <button type="button" className="btn btn--form">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
