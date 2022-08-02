import React, { useRef } from 'react';
import {
  AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Media.scss';

export default function Media() {
  const mediaSection = useRef();
  return (
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
  );
}
