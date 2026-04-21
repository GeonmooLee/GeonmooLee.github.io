import React from "react";
import { Link } from "react-router-dom";
import Expertise from "../components/Expertise";
import Main from "../components/Main";
import { getHighlightedProjects } from "../data/projects";

export default function HomePage() {
  const highlights = getHighlightedProjects();

  return (
    <div>
      <Main />

      <div className="items-container">
        <h1>At a glance</h1>
        <p>
          Double majoring in Mechanical Engineering and Electrical &amp;
          Computer Engineering at Seoul National University. I’m interested in
          robotics for social impact.
        </p>
      </div>

      <Expertise />

      <div className="projects-container">
        <div className="items-container">
          <h1>Highlights</h1>
          <p>
            Selected projects (dummy data for layout). You can replace these
            later.
          </p>
        </div>
        <div className="projects-grid">
          {highlights.map((p) => (
            <div className="project" key={p.id}>
              <a href={p.href} target="_blank" rel="noreferrer">
                <img
                  src={p.image}
                  className="zoom"
                  alt={p.title}
                  width="100%"
                />
              </a>
              <a href={p.href} target="_blank" rel="noreferrer">
                <h2>{p.title}</h2>
              </a>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
        <div className="items-container" style={{ paddingTop: 0 }}>
          <p>
            <Link to="/projects">See all projects →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
