import React from 'react';
import './ContactIcons.css';

export default function ContactIcons() {
  return (
    <ul className='contact-icons'>
      <li>
        <a href='mailto:edu.neto@icloud.com' target='_blank' rel='noopener noreferrer'>
          <img
            src='https://res.cloudinary.com/ygiah/image/upload/v1574704888/bootcamp/letter-icon-white.svg'
            alt='email-link'
          />
        </a>
      </li>
      <li>
        <a href='tel:+4407478801847'>
          <img
            src='https://res.cloudinary.com/ygiah/image/upload/v1574704902/bootcamp/mobile-icon-white.svg'
            alt='phone-link'
          />
        </a>
      </li>
    </ul>
  );
}
