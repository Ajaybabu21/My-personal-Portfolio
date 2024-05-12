import React from 'react';
import SectinTitle from '../../components/SectinTitle';

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NODE",
    "ANGULAR",
    "EXPRESS",
    "MONGODB",
  ];

  return (
    <div>
      <SectinTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[50vh] w-1/2 sm:w-full items-center '>
          <dotlottie-player src="https://lottie.host/ad87672d-3013-41d5-8f49-23acae44812c/WDuG3oKpoB.json" background="transparent" speed="1" autoplay></dotlottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full '>
          <p className='text-white '>
            Hello, my name is Ajay Babu. I enjoy living on the internet. My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes. It turns out hacking together a custom reblog button taught me a lot about HTML and CSS!
          </p>
          <p className='text-white'>
            As a MERN stack developer, I bring a passion for crafting dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I excel in seamlessly integrating front-end and back-end components to deliver efficient and user-friendly experiences.
          </p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>Key Skills:</h1>
        <div className='flex flex-wrap gap-10 mt-5'>
          {skills.map((skill, index) => (
            <div className='border border-tertiary py-3 px-5' >
              <h1 className='text-tertiary'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
