import React from 'react';
import avatar from '../assets/avatar.jpg'


export default function About() {
  return (
    <div className='right-side about'>
      <p><span>Hey</span> my name is Mohammed Abdulmpneim i'm a frontend developer with some backend knowledge</p>
      <div>
        <img  src={avatar} alt='avatar' />
      </div>
    </div>
  )
}