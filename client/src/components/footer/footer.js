import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

import { useRef, useState } from "react";

import "./footer.css";

export default function Footer() {
  const email = useRef();
  const [responseError, setresponseError] = useState();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  async function sendEmail() {
    ////Basic validation
    if (!validateEmail(email.current.value)) {
      setresponseError("Please input a valid e mail.");
      return;
    }
    ///send data to backend
    const data = email.current.value;
    fetch("/api/subscribe", {
      method: "POST",

      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email: data }),
    })
      .then((data) => data.json())
      .then((message) => {
        ////Throw error
        if (message.error) {
          throw new Error(message.error);
        }
        ////If no error display response message
        setresponseError(message.status);
      })
      .catch((err) => {
        ////Display error message on frontend
        setresponseError(err.message);
      });
  }

  return (
    <div className="footer-wrapper">
      <div className="form-wrapper">
        <h1 className="white-heading">Get Updates On Our Brand New Products</h1>
        <form className="email-form">
          <input
            type={"email"}
            placeholder={"Email address"}
            ref={email}
          ></input>
          <a className="btn-submit" onClick={sendEmail}>
            <FaArrowRight />
          </a>
        </form>
        <p className="email-info">{responseError}</p>"
      </div>
      <div className="support-wrapper">
        <div className="lower-links">
          <a className="first-li">Support</a>
          <a>Shipping & Returns</a>
          <a>Help & FAQ</a>
          <a>Terms & Conditions</a>
          <a>Privacy</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="icons-wrapper">
        <a>
          <FaFacebook size={"40px"} />
        </a>
        <a>
          <FaInstagram size={"40px"} />
        </a>
        <a>
          <FaTwitter size={"40px"} />
        </a>
      </div>
    </div>
  );
}
