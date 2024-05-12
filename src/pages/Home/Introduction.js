import React from 'react';
import Resume from '../../images/Resume.pdf';

function Introduction() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Ajay Babu</h1>
      <h1 className='text-7xl sm:text-3xl text-white font-semibold'>I Build Things For The Web.</h1>
      <p className='text-white w-full display:inline paragraph'>
        I am Full Stack Developer. Currently, I am Studying MERN Fullstack at Luminar Technolab. I aim to leverage and 
        utilize my skills in the field of web development as a full-stack developer. I completed BSC Computer Science at
        Donbosco College affiliated with the University of Calicut.
      </p>
      <a href={Resume} download="Resume" className='border-2 border-tertiary text-white px-10 py-3 rounded'>DOWNLOAD CV</a>
    </div>
  );
}

export default Introduction;

