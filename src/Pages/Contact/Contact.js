import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const AlertNotification = (type, message, title) => {
  switch (type) {
    case "info":
      return NotificationManager.info(message, title, 4000);
    case "success":
      return NotificationManager.success(message, title, 5000);
    case "error":
      return NotificationManager.error(message, title, 4000);
    default:
      return NotificationManager.warning(message, title, 4000);
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23v71lq",
        "template_03qzwk6",
        e.target,
        "user_nxN1kieeQbnds3WsmNXvV"
      )
      .then(
        (result) => {
          console.log(result.text);
          AlertNotification(
            "success",
            "Your Message has been sent 😃",
            "Email Sent!!"
          );
        },
        (error) => {
          AlertNotification(
            "error",
            "Couldn't send your message",
            "Error Occured !!"
          );
          console.log(error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <NotificationContainer />
      <section class="contact single-page">
        <div className="contact-container">
          <div class="contact-title">
            <h2>contact</h2>
            <div class="underline"></div>
          </div>
          <div class="contact-page">
            <div class="contact-info">
              <p>
                If you are looking to contact me through Gmail, send me an email
                at&nbsp;
                <a
                  href="https://www.gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  rajanverma37624@gmail.com
                </a>
              </p>
              {/* <p>
                You can also reach me on instagram at&nbsp;
                <a
                  href="https://www.instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  @RajanVerma03
                </a>
              </p> */}
            </div>
            <article className="contact-form">
              <h3>get in touch</h3>
              <form onSubmit={formSubmit}>
                <div className="contact-form-group">
                  <input
                    value={formData.name}
                    onChange={(e) => inputChange(e)}
                    type="text"
                    name="name"
                    placeholder="name"
                    className="form-control"
                  />
                  <input
                    onChange={(e) => inputChange(e)}
                    value={formData.email}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                  <textarea
                    value={formData.message}
                    onChange={(e) => inputChange(e)}
                    name="message"
                    rows="4"
                    placeholder="message"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="contact-form-btn">
                  submit
                </button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
