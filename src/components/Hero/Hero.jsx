import React, { useEffect } from 'react';
import './Hero.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section">
      <div className="hero" data-aos="fade-up">
        <p className="hero-greeting">Hello my name is</p>
        <h1 className="hero-name">Giuseppe Tomasini.</h1>
        <h2 className="hero-title">I create things for the web.</h2>
        <p className="hero-description">
          I am a full-stack web developer with a passion for UI/UX.
          Currently, I am building this portfolio website
          to showcase my projects and land my first job.
        </p>
        <button className="hero-button" type="button">See my projects!</button>
      </div>
    </section>
  );
}
