import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [emailValid, setEmailValid] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      setEmailValid(emailRegex.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setForm({ name: '', email: '', message: '' });
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const isFormValid = () => {
    return emailValid && form.message.trim() !== '' && form.name.trim() !== '';
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form-container">
        {showConfirmation && <p className="confirmation-message">Thank you for your message! ♡</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={!emailValid ? 'invalid' : ''}
          />
          {!emailValid && <p className="error-message">Please enter a valid email.</p>}
          <textarea
            name="message"
            value={form.message}
            onChange={handleInputChange}
            placeholder="Your Message"
          />
          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


