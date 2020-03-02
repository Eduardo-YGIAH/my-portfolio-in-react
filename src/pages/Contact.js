import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [msg, setMsg] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    console.log(name, company, msg);
    setName('');
    setCompany('');
    setMsg('');
  };

  return (
    <div className='contact-container'>
      <form className='contact-form' encType='text/plain' onSubmit={formSubmit}>
        <h1 className='heading'>Get In Touch</h1>
        <div className='form-group'>
          <label htmlFor='Name'>Your Name</label>
          <input type='text' required name='Name' onChange={e => setName(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='Company'>Company</label>
          <input type='text' required name='Company' onChange={e => setCompany(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Your message</label>
          <textarea name='message' id='message' cols='30' rows='10' onChange={e => setMsg(e.target.value)}></textarea>
        </div>
        <button className='btn' type='submit'>
          SEND
        </button>
      </form>
    </div>
  );
}
