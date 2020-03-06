import React from 'react';
import './SocialLinks.css';

export default function SocialLinks() {
  return (
    <ul className='social-icons'>
      <li>
        <a href='https://www.linkedin.com/in/eduardo-neto-b71bb36b/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
      </li>
      <li>
        <a href='https://github.com/Eduardo-YGIAH' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github-square'></i>
        </a>
      </li>
    </ul>
  );
}
