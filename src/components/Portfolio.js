import React from 'react';
import Ubh from '../images/UbiquitousHappi.png';
import ThereAndBack from '../images/ThereAndBack.png';
import Daily from '../images/Daily.png';
import Know from '../images/KnowMore.png';
import Budget from '../images/BudgetTracker.png';
import Dragon from '../images/DragonBlaster.png';

function Portfolio() {
  return (
    <div>
      <div>
        <h2>Ubiquitous</h2>
        <a href="https://ubiquitouscommunity.herokuapp.com/" target="_blank">
          <img id="UBH" src={Ubh} alt="Project 2" />
        </a>
        <p>
          This project was a collective effort. It by far is my favortite Its
          use is for small streamers to have a more personal connection with
          their audience.
        </p>
        <a
          href="https://github.com/LordLowdar/ubiquitous-happiness"
          class="repo"
          target="_blank"
        >
          Repo.
        </a>
        <div>
          <h3>There and Back Travel App</h3>
          <a href="https://lordlowdar.github.io/thereandback/" target="_blank">
            <img src={ThereAndBack} alt="Picture of deployed project" />
          </a>
          <p>
            This was the first group project done. I was part of the modal and
            weather display design. This was my first exposure to group coding,
            and I intend on finishing the build.
          </p>
          <a
            href="https://github.com/LordLowdar/thereandback"
            class="repo"
            target="_blank"
          >
            Repo.
          </a>
        </div>
        <div>
          <h3>Know More Tiers!</h3>
          <a
            href="https://lordlowdar.github.io/know-more-tiers/"
            target="_blank"
          >
            <img src={Know} alt="Picture of deployed project" />
          </a>
          <p>
            Know more tiers is an application meant to bring people closer
            together. It allows users to create a ranking tier list and see
            others. These cover very broad topics to allow you to see who you
            have the most in common with.
          </p>
          <a
            href="https://github.com/LordLowdar/know-more-tiers"
            class="repo"
            target="_blank"
          >
            Repo.
          </a>
          <a
            href="https://know-more-tiers27.herokuapp.com/"
            class="deploy"
            target="_blank"
          >
            Deployed.
          </a>
        </div>
        <div>
          <h3>Daily Planner</h3>
          <a
            href="https://lordlowdar.github.io/effective-octo-spork/"
            target="_blank"
          >
            <img src={Daily} alt="Example of deployed day planner" />
          </a>
          <p>
            This day planner is used to track daily events. Its using military
            time to keep confusion out of it.
          </p>
          <a
            href="https://github.com/LordLowdar/effective-octo-spork"
            class="repo"
            target="_blank"
          >
            Repo.
          </a>
        </div>
        <div>
          <h3>Budget Tracker</h3>
          <a
            href="https://lordlowdar.github.io/budget-tracker/"
            target="_blank"
          >
            <img src={Budget} alt="Example of deployed budget planner" />
          </a>
          <p>
            This budget planner was created to help keep track of finances. This
            is also a PWA and will work offline.
          </p>
          <a
            href="https://github.com/LordLowdar/budget-tracker"
            class="repo"
            target="_blank"
          >
            Repo.
          </a>
        </div>
        <div>
          <h3>Dragon Blaster</h3>
          <a
            href="https://scratch.mit.edu/projects/541116196/"
            rel="noopener"
            target="_blank"
          >
            <img src={Dragon} alt="Another scratch game" />
          </a>
          <p>
            Become the Dragon! Defend yourself against the evil clouds and blast
            them! This was created using Scratch very early on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
