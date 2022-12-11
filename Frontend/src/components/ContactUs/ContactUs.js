import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.scss";
export const ContactUs = () => {
  const Swal = require("sweetalert2");
  const [areaValue, setAreaValue] = useState("");
  const handleValueChange = (event) => {
    setAreaValue(event.target.value);
  };
  const sendMessage = () => {
    Swal.fire("Message envoyée!", "", "success");
  };
  const notSendMessage = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Une petite erreur est survenue!",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6alxmb",
        "template_nlrtf5d",
        form.current,
        "4lwRqhW9TCPAwWWBZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          sendMessage();
          setAreaValue("");
        },
        (error) => {
          console.log(error.text);
          notSendMessage();
          setAreaValue("");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <textarea name="message" value={areaValue} onChange={handleValueChange} />
      <button type="submit" value="Send">
        Envoyer
      </button>
    </form>
  );
};
