import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const [letterClass, setLetterClass] = useState('text-animate');
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://kirubel.pythonanywhere.com/get-csrf-token/');
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

   const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://kirubel.pythonanywhere.com/contact/', new FormData(form.current), {
        headers: {
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
        credentials: 'include'
      });
      alert('Message successfully sent!');
      window.location.reload(false); 
    } catch (error) {
      console.error('Failed to send the message:', error);
      alert('Failed to send the message, please try again');
    }
  }; 

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;