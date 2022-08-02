import React from 'react';
import projects from '../../projects/projects';
import './Projects.scss';
import Project from '../Project/Project';

export default function Projects() {
  const projectsList = projects.projects;
  return (
    <section className="section">
      <div>Projects</div>
      <ul className="projects-list">
        {
          projectsList.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              live={project.live}
              github={project.github}
              image={project.image}
            />

          ))
        }
      </ul>
    </section>
  );
}
