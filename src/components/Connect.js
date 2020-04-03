import React from 'react';
import '../css/App.css';



function Social() {
  return (
    <div className='social'>
      <h3>You can find me on</h3>
      <ul>
        <li>
          <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/mohammed.Alngaawy'> Facebook </a>
        </li>
        <li>
          <a target='_blank'  rel="noopener noreferrer" href='https://twitter.com/malngaawy'> Twitter </a>
        </li>
        <li>
          <a target='_blank' rel="noopener noreferrer"  href='https://www.instagram.com/moalngaawy/'>Instagram</a>
        </li>
        <li>
          <a target='_blank' rel="noopener noreferrer"  href='linkedin.com/in/mohammed-alngaawy-352659147'>Linked In</a>
        </li>
        <li>
          <a target='_blank' rel="noopener noreferrer"  href='https://github.com/MAlngaawy'>Github</a>
        </li>
      </ul>
      <h4>Or You Can message me  Direct by <b><a href="mailto:m.alngaawy@yahoo.com">Gmail</a></b> </h4>
    </div>
  )
}


export default function Connect() {
  return (
    <div className='right-side connect'>
      <h1>Connect Me</h1>
      <Social />
    </div>
  )
}