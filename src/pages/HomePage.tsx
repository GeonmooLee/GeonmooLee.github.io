import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import { getHighlightedProjects } from "../data/projects";
import { impactItems } from "../data/impact";
import { experienceItems } from "../data/experience";
import ProjectThumbnail from "../components/ProjectThumbnail";

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
          Undergraduate student double majoring in{" "}
          <strong className="text-emphasis" style={{ color: "#f0ce44" }}>
            Mechanical Engineering
          </strong>{" "}
          and{" "}
          <strong className="text-emphasis" style={{ color: "#f4b97b" }}>
            Electrical &amp; Computer Engineering
          </strong>{" "}
          at Seoul National University.
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

      <div className="projects-container">
        <div className="items-container-projects">
          <h1>
            <strong className="text-emphasis" style={{ color: "#7be2f4" }}>
              Experience &amp; Research
            </strong>{" "}
            Highlights
          </h1>
        </div>
        <div className="projects-grid">
          {experienceHighlights.map((item) => (
            <div className="project" key={item.id}>
              <Link to={item.detailPath}>
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
          <h1>
            <strong className="text-emphasis" style={{ color: "#d87bf4" }}>
              Featured Projects
            </strong>
          </h1>
        </div>
        <div className="projects-grid">
          {highlights.map((p) => (
            <div className="project" key={p.id}>
              <Link to={`/projects/${p.id}`}>
                <ProjectThumbnail
                  projectId={p.id}
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
          <h1>
            <strong className="text-emphasis" style={{ color: "#7bf47b" }}>
              Social Impact & Leadership
            </strong>{" "}
            Highlights
          </h1>
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
