import React from 'react';
import './ShowConfirmation.css';

export default function ShowConfirmation(props) {
  return <div className='message'>{props.value}</div>;
}
