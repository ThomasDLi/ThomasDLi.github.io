import React from 'react';
import css from './Contact.css';

function Contact() {
  return (
    <div className='Contact' style={css}>
      <h1>Contact Me!</h1>
      <h2>{">"} <a target="_blank" href="https://github.com/ThomasDLi" rel="noopener noreferrer">Github</a></h2>
      <h2>{">"} <a target="_blank" href="https://dmoj.ca/user/JamesBrook123" rel="noopener noreferrer">DMOJ</a></h2>
      <h2>{">"} <a target="_blank" href="mailto: thomas.li26@stgeorges.bc.ca" rel="noopener noreferrer">Email</a></h2>
    </div>
  );
}

export default Contact;