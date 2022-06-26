import React from 'react';
import resume from '../Documents/Resume.pdf';

function Resume() {
  return (
    <div className="container">
      <div className="resumeArea">
        <p>
          <a class="resumeLink" href={resume} target="_blank">
            Resume Link
          </a>
        </p>
      </div>
    </div>
  );
}

export default Resume;
