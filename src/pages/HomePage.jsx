import React from 'react';

export default function HomePage() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hellom my name is</p>
      <h1 className="hero-name">Giuseppe Tomasini.</h1>
      <h2 className="hero-title">I create things for the web.</h2>
      <p className="hero-description">
        I am a full-stack we developer with a passion for UI/UX.
        Currently, I am building this portfolio website
        to showcase my projects and land a job.
      </p>
      <button type="button">See my projects!</button>
    </section>
  );
}
