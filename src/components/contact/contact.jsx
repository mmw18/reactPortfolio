import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [emailValid, setEmailValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      setEmailValid(emailRegex.test(value));
    }
  };

  const isFormValid = () => emailValid && form.message;

  return (
    <div className="contact-form">
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
      <button
        type="submit"
        disabled={!isFormValid()}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
