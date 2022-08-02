import React from 'react';
import profilePic2 from '../../images/profile_pic2.jpeg';
import './About.scss';

export default function About() {
  return (
    <section className="section">
      <div className="about">
        <div className="section-title">
          <h2 className="about-title">About Me</h2>
          <span className="line-span" />
        </div>
        <div className="about-description">
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
          <div className="about-image-container" style={{ backgroundImage: `url(${profilePic2})` }} />
        </div>
      </div>
    </section>
  );
}
