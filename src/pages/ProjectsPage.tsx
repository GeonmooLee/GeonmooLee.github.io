import React from "react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../data/projects";
import ProjectThumbnail from "../components/ProjectThumbnail";
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
            <div
              className="items-container-projects category-banner"
              style={{ marginBottom: 20 }}
            >
              <div className="category-title-row">
                <h2 style={{ marginBottom: 0 }}>{cat.label}</h2>
              </div>
              <p style={{ opacity: 0.9, marginTop: 8 }}>{cat.description}</p>
            </div>
            <div className="projects-grid" style={{ marginBottom: 20 }}>
              {items.map((p) => (
                <div className="project" key={p.id}>
                  <Link to={`/projects/${p.id}`}>
                    <ProjectThumbnail
                      projectId={p.id}
                      fallbackSrc={p.image}
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
