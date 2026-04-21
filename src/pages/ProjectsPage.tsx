import React from "react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../data/projects";
import "../assets/styles/Project.scss";

export default function ProjectsPage() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <p style={{ opacity: 0.9, marginTop: 0, marginBottom: 30 }}>
        Engineering projects I've worked on.
      </p>

      {projectCategories.map((cat) => {
        const items = projects
          .filter((p) => p.categoryId === cat.id)
          .slice()
          .sort((a, b) => b.sortKey - a.sortKey);
        if (items.length === 0) return null;

        return (
          <div key={cat.id}>
            <div className="items-container-projects">
              <h2>{cat.label}</h2>
              {cat.description ? (
                <p style={{ opacity: 0.9 }}>{cat.description}</p>
              ) : null}
            </div>
            <div className="projects-grid">
              {items.map((p) => (
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
                    <h2>{p.title}</h2>
                  </Link>
                  <p style={{ opacity: 0.8, marginTop: 0 }}>{p.period}</p>
                  <p>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
