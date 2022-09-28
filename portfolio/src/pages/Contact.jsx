import React from "react";
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
        &lt; Que tal trocarmos uma idéia?
        <TypeAnimation
          sequence={[500, `Me envie uma mensagem />`]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="type-animation-contact"
        />
      </h2>
      <form action="" className="form-contact" onSubmit={sendEmail} ref={ refForm }>
        <div className="form-user">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Assunto"
          name="subject"
          className="subject"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="message-contact"
          placeholder="Mensagem"
          required
        />
        <button type="submit" value="submit" className="send-forms">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
