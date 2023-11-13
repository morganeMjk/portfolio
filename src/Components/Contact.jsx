import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

export default function Contact() {
  const finalTitle = "Contactez-moi";
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [validation, setValidation] = useState(false);

  const animateTitle = (index) => {
    if (index <= finalTitle.length) {
      setTitle(finalTitle.slice(0, index));
      setTimeout(() => {
        animateTitle(index + 1);
      }, 200);
    }
  };

  useEffect(() => {
    animateTitle(1);
  }, []);


  const sendEmail = async (e) => {
    e.preventDefault();

    setError([]);

    const newError = [];
    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ-]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ-]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i;

    if (firstname.length <= 0 || !nameRegex.test(firstname)) {
      newError.push("firstname");
    }
    if (lastname.length <= 0 || !nameRegex.test(lastname)) {
      newError.push("lastname");
    }
    if (!email || !emailRegex.test(email)) {
      newError.push("email");
    }
    if (message.length < 5) {
      newError.push("message");
    }

    const resetFormFields = () => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    };

    setError(newError);

    if (newError.length > 0) {
      return;
    }

    try {
      await emailjs.sendForm('service_lokeir9', 'template_vri6a29', e.target, 'AC5dYNe3XAkKZ5nGe');
      resetFormFields();
      setValidation(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  


  return (
    <div className='contact'>
      <Link to="/" className="bubble-button contact__button">
        <i className="fa-solid fa-house bubble-button__icon"></i>
      </Link>

      <div className='contact__container'>

        <div className='contact__container__background'>

          <div>
            <h3 className='main__articles__title contact__container__title'>
              {title}
              <span className={title.length === finalTitle.length ? "cursor active" : "cursor"}>|</span>
            </h3>

          <p className='contact__container__detail'>Vous pouvez me contacter <br /> au <a href="tel:+621444631">06 21 44 46 31</a>, par mail à l'adresse <a href="mailto:morgane.mjk@outlook.fr">morgane.mjk@outlook.fr</a>, ou en me laissant un message juste ici</p>
          </div>

          <form name="contact" method="post" className='contact__container__form' onSubmit={(e) => sendEmail(e)}>
            <div className='contact__container__form__bloc'>
              <label htmlFor='firstname' hidden>Prénom</label>
              <input
                type="text"
                name="firstname"
                placeholder='Prénom'
                value={firstname}
                onChange={(e) => setFirstname(e.currentTarget.value)}
              />
              {error.includes('firstname') && <label htmlFor='firstname' className='error-message'>Veuillez renseigner votre prénom</label>}
            </div>

            <div className='contact__container__form__bloc'>
              <label htmlFor='lastname' hidden>Nom</label>
              <input
                type="text"
                name="lastname"
                placeholder='Nom'
                value={lastname}
                onChange={(e) => setLastname(e.currentTarget.value)}
              />
              {error.includes('lastname') && <label htmlFor='lastname' className='error-message'>Veuillez renseigner votre nom</label>}
            </div>

            <div className='contact__container__form__bloc'>
              <label htmlFor='email' hidden>Email</label>
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              {error.includes('email') && <label htmlFor='email' className='error-message'>Veuillez renseigner une adresse mail valide</label>}
            </div>

            <div className='contact__container__form__bloc'>
              <label htmlFor='message' hidden>Message</label>
              <textarea
                name="message"
                placeholder='Votre message'
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}>
              </textarea>
              {error.includes('message') && <label htmlFor='message' className='error-message'>Votre message doit contenir 5 caractères minimum</label>}
            </div>



            <button type="submit" className='form-button'>Envoyer</button>
          </form>

          {validation && (
            <div className='validation-modal'>
              <p className='validation-modal__content'>Votre message a bien été envoyé, je reviendrai vers vous dans les plus brefs délais</p>
              <i className='fa-solid fa-xmark bubble-button__icon validation-modal__button' onClick={() => setValidation(false)}></i>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}