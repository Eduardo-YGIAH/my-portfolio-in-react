import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <Link to={props.btn.link}>
      <button className='btn'>{props.btn.label}</button>
    </Link>
  );
}
