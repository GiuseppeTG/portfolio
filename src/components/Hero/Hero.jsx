import React from 'react';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hello my name is</p>
      <h1 className="hero-name">Giuseppe Tomasini.</h1>
      <h2 className="hero-title">I create things for the web.</h2>
      <p className="hero-description">
        I am a full-stack we developer with a passion for UI/UX.
        Currently, I am building this portfolio website
        to showcase my projects and land a job.
      </p>
      <button className="hero-button" type="button">See my projects!</button>
    </section>
  );
}
