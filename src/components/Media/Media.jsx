import React, { useRef, useEffect } from 'react';
import Aos from 'aos';
import {
  AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Media.scss';
import 'aos/dist/aos.css';

export default function Media() {
  const mediaSection = useRef();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="media-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="media-title-container">
        <span className="contact-line" />
        <h2 className="media-title">
          Contact
        </h2>
        <span className="contact-line" />
      </div>
      <p>Email: giusetomasini@gmail.com</p>
      <div className="icon-container" id="media" ref={mediaSection}>
        <Link to="https://www.instagram.com/giusetomasini/" className="icon instagram">
          <AiOutlineInstagram className="i" />
        </Link>

        <Link to="https://twitter.com/giusetomasini" className="icon twitter">
          <AiOutlineTwitter className="i" />
        </Link>

        <Link to="https://www.linkedin.com/in/giuseppe-tomasini-g/" className="icon linkedin">
          <AiOutlineLinkedin className="i" />
        </Link>

        <Link to="https://github.com/GiuseppeTG" className="icon github">
          <AiOutlineGithub className="i" />
        </Link>
      </div>
    </div>
  );
}
