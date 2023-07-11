import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vlxelwj",
      "template_nq8rkm5",
      form.current,
      "-bLi3fQatbu94nmnq"
    );
    e.target.reset();
    toast.success("Message Send Successfully !");
  };
  const openGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };
  return (
    <section id="contact">
      <ToastContainer />
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>jayeshspatil1602@gmail.com</h5>
            <button
              onClick={openGmail}
              target="_blank"
              className="contact__mail_btn"
            >
              Send an email
            </button>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name "
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="your email "
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
