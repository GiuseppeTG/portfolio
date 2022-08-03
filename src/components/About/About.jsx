import React, { useEffect } from 'react';
import Aos from 'aos';
import profilePic2 from '../../images/profile_pic2.jpeg';
import './About.scss';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="section">
      <div className="about">
        <div className="section-title" data-aos="fade-right">
          <h2 className="about-title">About Me</h2>
          <span className="line-span" />
        </div>
        <div className="about-description" data-aos="fade-up">
          <div className="description-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aliquam asperiores consequatur praesentium deserunt autem,
              pariatur quasi sit. Accusamus temporibus,
              doloribus dolores dolore alias necessitatibus esse quos aperiam vel commodi?
            </p>
            <p>
              Lorem, ipsum dolor sit amet
              {' '}
              <span className="purple-text">consectetur adipisicing</span>
              {' '}
              elit.
              Recusandae aliquam asperiores consequatur praesentium deserunt autem,
              pariatur quasi sit. Accusamus temporibus,
              doloribus dolores dolore alias necessitatibus esse quos aperiam vel commodi?
            </p>
          </div>
          <div className="about-image-container" style={{ backgroundImage: `url(${profilePic2})` }} data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
}
