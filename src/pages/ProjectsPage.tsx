import React from "react";
import { projects } from "../data/projects";
import "../assets/styles/Project.scss";

export default function ProjectsPage() {
  const mechanical = projects.filter((p) => p.category === "mechanical-control");
  const software = projects.filter((p) => p.category === "web-software");

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="items-container">
        <h2>Mechanical / Control</h2>
      </div>
      <div className="projects-grid">
        {mechanical.map((p) => (
          <div className="project" key={p.id}>
            <a href={p.href} target="_blank" rel="noreferrer">
              <img src={p.image} className="zoom" alt={p.title} width="100%" />
            </a>
            <a href={p.href} target="_blank" rel="noreferrer">
              <h2>{p.title}</h2>
            </a>
            <p>{p.description}</p>
          </div>
        ))}
      </div>

      <div className="items-container">
        <h2>Web / Software</h2>
      </div>
      <div className="projects-grid">
        {software.map((p) => (
          <div className="project" key={p.id}>
            <a href={p.href} target="_blank" rel="noreferrer">
              <img src={p.image} className="zoom" alt={p.title} width="100%" />
            </a>
            <a href={p.href} target="_blank" rel="noreferrer">
              <h2>{p.title}</h2>
            </a>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

