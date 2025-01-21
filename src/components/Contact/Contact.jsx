import React from "react";
import "./contact.css";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bhr2aoj",
        "template_5i95ub8",
        form.current,
        "RniOmptKg6AvrXk85"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();
      alert("Message has been sent");
  };

  return (
    <section id="contact" className="contact-page">
      <h5>//Get In Touch</h5>
      <h2>&lt;Contact Me <code>/&gt;</code></h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="icon-">
              <span className="mail-icon">
                <IoIosMail className="contact_option-icon" size={25.2} />
              </span>
              <h5>malivaibhav.7620@gmail.com</h5>
            </div>
            <a href="mailto:malivaibhav.7620@gmail.com">
              Send a message via mail
            </a>
          </article>

          <article className="contact__option">
            <div className="icon-">
              <span className="mail-icon">
                <IoLogoWhatsapp className="contact_option-icon" size={23} />
              </span>
              <h5>+91 7620795110</h5>
            </div>
            <a
              href="https://wa.me/917620795110?text=Hello%20there!"
              target="_blank"
            >
              Send a message via WhatsApp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your e-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
