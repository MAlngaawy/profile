import React from 'react';
import avatar from '../assets/avatar.jpg'

export default function About() {
  return (
    <div className='right-side about'>
      <p><span>Hey</span> my name is Mohammed Abdulmpneim i'm a frontend developer with some backend knowledge</p>
      <h5>My Skills</h5>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Sass</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React.js</li>
      </ul>
      <div>
        <img  src={avatar} alt='avatar' />
      </div>
    </div>
  )
}