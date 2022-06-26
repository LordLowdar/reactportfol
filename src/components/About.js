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
          <p className="intro"></p>
        </div>
      </div>
    </div>
  );
}

export default About;
