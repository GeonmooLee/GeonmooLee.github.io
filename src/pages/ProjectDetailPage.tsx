import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../assets/styles/Project.scss";
import { getProjectById } from "../data/projects";
import ProjectThumbnail from "../components/ProjectThumbnail";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="items-container">
        <h1>Project not found</h1>
        <p>
          <Link to="/projects">Back to Projects</Link>
        </p>
      </div>
    );
  }

  const { id, title, description, image, links, detail } = project;

  return (
    <div className="projects-container">
      <div className="items-container" style={{ padding: 0 }}>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/projects"
          sx={{ paddingLeft: 0 }}
        >
          Back to Projects
        </Button>
      </div>

      <div className="items-container" style={{ paddingTop: 0 }}>
        <h1 style={{ marginTop: 8 }}>{title}</h1>
        <p style={{ opacity: 0.95 }}>{description}</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
          {links?.demo && (
            <Button
              variant="contained"
              endIcon={<LaunchIcon />}
              href={links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live / Demo
            </Button>
          )}
          {links?.github && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          )}
          {links?.paper && (
            <Button variant="outlined" href={links.paper} target="_blank" rel="noreferrer">
              Paper
            </Button>
          )}
          {links?.video && (
            <Button variant="outlined" href={links.video} target="_blank" rel="noreferrer">
              Video
            </Button>
          )}
        </div>
      </div>

      <div className="projects-grid">
        <div className="project">
          <ProjectThumbnail
            projectId={id}
            fallbackSrc={image}
            className="zoom"
            alt={title}
            width="100%"
          />
        </div>
        <div className="project">
          <h2>Overview</h2>
          <p style={{ opacity: 0.95 }}>
            {detail?.summary ||
              "This is a detail page template. Replace this text with a longer summary: problem → approach → outcomes."}
          </p>

          {detail?.bullets?.length ? (
            <ul>
              {detail.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          ) : (
            <ul>
              <li>Problem</li>
              <li>Approach</li>
              <li>Results</li>
              <li>What I learned</li>
            </ul>
          )}
        </div>
      </div>

      <div className="items-container">
        <h2>Media</h2>
        <p style={{ opacity: 0.9 }}>
          Template area for videos/images. Add YouTube embeds or demo clips later.
        </p>
      </div>
    </div>
  );
}

