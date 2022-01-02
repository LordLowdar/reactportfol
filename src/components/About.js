import React from 'react';
import Avatar from '../images/Avatar.jpg';

function About() {
  return (
    <div className="container" id="about">
      <div>
        <h2>About me!</h2>
        <div className="content">
          <div>
            <img id="avatar" src={Avatar} alt="its me" />
          </div>
          <p className="intro">
            Greetings! I am a new aspiring web developer. Please take a minute
            to check out my portfolio. I am making a career shift to the tech
            sector and want to share my journey with you. I am currently
            studying in a coding bootcamp through UC Davis and look to find
            employment in
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
