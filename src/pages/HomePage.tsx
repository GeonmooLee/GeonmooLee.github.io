import React from "react";
import { Link } from "react-router-dom";
import Expertise from "../components/Expertise";
import Main from "../components/Main";
import { getHighlightedProjects } from "../data/projects";
import { impactItems } from "../data/impact";
import { experienceItems } from "../data/experience";

export default function HomePage() {
  const highlights = getHighlightedProjects()
    .slice()
    .sort((a, b) => b.sortKey - a.sortKey);
  const impactHighlights = impactItems.slice(0, 3);
  const experienceHighlights = experienceItems.slice(0, 3);

  return (
    <div>
      <Main />

      <div className="items-container">
        <h1>At a glance</h1>
        <p>
          Undergraduate student double majoring in <b>Mechanical Engineering</b>{" "}
          and <b>Electrical &amp; Computer Engineering</b> at Seoul National
          University.
          <br />
          My goal is to use robotics to help close the social inequality gap. Up
          to now, I've focused on creating affordable and accessible robotic
          prosthetics.
          <br />
          In the long run, I hope to use my engineering skills to build
          technologies that bring positive, real-world changes to underserved
          communities.
        </p>
      </div>

      {/* <Expertise /> */}

      <div className="projects-container">
        <div className="items-container-projects">
          <h1>Experience &amp; Research Highlights</h1>
        </div>
        <div className="projects-grid">
          {experienceHighlights.map((item) => (
            <div className="project" key={item.id}>
              <Link to="/experience">
                <h2 style={{ marginBottom: 6 }}>{item.title}</h2>
              </Link>
              <p style={{ opacity: 0.85, marginTop: 0 }}>
                {item.period} <br /> {item.org}
              </p>
            </div>
          ))}
        </div>
        <div className="items-container-project" style={{ paddingTop: 20 }}>
          <p>
            <Link to="/experience">See all experience & research →</Link>
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className="items-container-projects">
          <h1>Featured Projects</h1>
        </div>
        <div className="projects-grid">
          {highlights.map((p) => (
            <div className="project" key={p.id}>
              <Link to={`/projects/${p.id}`}>
                <img
                  src={p.image}
                  className="zoom"
                  alt={p.title}
                  width="100%"
                />
              </Link>
              <Link to={`/projects/${p.id}`}>
                <h2 style={{ marginBottom: 6 }}>{p.title}</h2>
              </Link>
              <p style={{ opacity: 0.8, marginTop: 0 }}>{p.period}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
        <div className="items-container-project" style={{ paddingTop: 20 }}>
          <p>
            <Link to="/projects">See all projects →</Link>
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className="items-container-projects">
          <h1>Social Impact & Leadership Highlights</h1>
        </div>
        <div className="projects-grid">
          {impactHighlights.map((item) => (
            <div className="project" key={item.id}>
              <Link to="/impact">
                <h2 style={{ marginBottom: 6 }}>{item.title}</h2>
              </Link>
              <p style={{ opacity: 0.8, marginTop: 0 }}>{item.period}</p>
              <p>{item.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="items-container-project" style={{ paddingTop: 20 }}>
          <p>
            <Link to="/impact">See all social impact & leadership →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
