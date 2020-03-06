import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import SocialLinks from '../components/SocialLinks';
import ContactIcons from '../components/ContactIcons';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const payload = {
    name: name.trim(),
    email: email.trim(),
    message: msg.trim(),
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(payload);
    axios({
      url: '/contact/api/form',
      method: 'POST',
      data: payload,
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' onSubmit={formSubmit}>
        <h1 className='heading'>Get In Touch</h1>
        <div className='form-group'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' required name='name' onChange={e => setName(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' required name='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Your message</label>
          <textarea
            required
            name='message'
            id='message'
            cols='30'
            rows='10'
            onChange={e => setMsg(e.target.value)}
          ></textarea>
        </div>
        <button className='btn' type='submit'>
          SEND
        </button>
        <div className='spacer'></div>
        <div className='icons-container'>
          <SocialLinks />
          <ContactIcons />
        </div>
      </form>
    </div>
  );
}
