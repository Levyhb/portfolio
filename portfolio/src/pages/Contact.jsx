import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/pages/Contact.css";
import "animate.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

// const serviceId = import.meta.env.EMAILJS_SERVICE_ID;
// const templateId = import.meta.env.EMAILJS_TEMPLATE_ID;
// const publicKey = import.meta.env.EMAILJS_USER_ID;

export default function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6usbdin",
        "template_68a9rfa",
        refForm.current,
        "CAcDcXqszVed0flxO",
      )
      .then(
        () => {
          alert("Mensagem Enviada com sucesso!");
          window.location.reload(false);
        },
        () => {
        alert("Falha ao enviar mensagem, tente novamente");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        &lt;Quer trocar uma idéia?
        <TypeAnimation
          sequence={[500, `Me envie uma mensage />`]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2.6rem",
            color: " var(--primary-light)",
            fontWeight: "bold",
          }}
        />
      </h2>
      <form action="" className="form-contact" onSubmit={sendEmail} ref={ refForm }>
        <div className="form-user">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            // onChange={({ target }) => setName(target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            // onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Assunto"
          name="subject"
          className="subject"
          // onChange={({ target }) => setSubject(target.value)}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="message-contact"
          placeholder="Mensagem"
          // onChange={({ target }) => setMessage(target.value)}
          required
        />
        <button type="submit" value="submit" className="send-forms">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
