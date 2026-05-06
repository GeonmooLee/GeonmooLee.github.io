import React from "react";
import { projectCategories, projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
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
                <ProjectCard project={p} key={p.id} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
