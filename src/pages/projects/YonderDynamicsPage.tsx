import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectAssetSrc } from "../../utils/projectAssets";

const projectId = "yonder-dynamics";

const iterationCards = [
  {
    title: "Designed From Scratch",
    body: "Modeled the drilling and sample-cache mechanism in OnShape, starting from subsystem requirements rather than modifying an existing assembly.",
  },
  {
    title: "Prototyped Physically",
    body: "Turned CAD into 3D-printed parts, assembled the mechanism, and checked whether the motion actually worked outside the screen.",
  },
  {
    title: "Redesigned by Testing",
    body: "Used failed fits, blocked motion, and closure issues as design feedback, then revised the mechanism through multiple build-test-iterate loops.",
  },
];

export default function YonderDynamicsPage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="Mars Rover Drilling & Sample-Cache Mechanism"
        period={project?.period || "Yonder Dynamics / UCSD"}
        description={
          project?.description ||
          "Built a mechanical sample-cache mechanism for a Mars Rover through CAD, 3D printing, testing, and redesign."
        }
        meta={[
          {
            label: "Organization",
            value: "Yonder Dynamics, UCSD",
          },
          {
            label: "Role",
            value: "Mechanical Team, mechanism design, prototyping",
          },
          {
            label: "Focus",
            value: "Space robotics, OnShape, 3D printing, rapid prototyping",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "01.jpg"),
            alt: "OnShape CAD screenshot of the Mars Rover drilling and sample-cache mechanism",
            caption: "<OnShape CAD / Mechanism Design>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: getProjectAssetSrc(projectId, "02.jpg"),
            alt: "3D printed prototype of the Mars Rover sample-cache mechanism",
            caption: "<3D-Printed Prototype>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: getProjectAssetSrc(projectId, "video.mp4"),
            alt: "Mars Rover drilling and sample-cache mechanism test video",
            caption: "<Mechanism Test Video>",
            type: "video",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "1200px",
          height: "340px",
          tabletHeight: "260px",
          mobileHeight: "220px",
          minItemWidth: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Project Context">
        <ul>
          <li>
            Joined Yonder Dynamics during my UCSD exchange and worked with the
            Mechanical Team on a Mars Rover subsystem.
          </li>
          <li>
            The project sat in the context of space robotics and URC-style rover
            tasks, where a rover must drill, collect, and securely store samples
            under competition constraints.
          </li>
          <li>
            My subsystem focused on the rover's drilling and sample-cache
            mechanism, especially the mechanical structure for keeping collected
            material enclosed during rover movement.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Engineering Problem">
        <ul>
          <li>
            A Mars Rover needs a reliable way to drill, collect, and securely
            cache samples while the rover continues moving across uneven
            terrain.
          </li>
          <li>
            For URC-style requirements, the mechanism must not only collect
            material but also keep the cache closed and stable after collection.
          </li>
          <li>
            The design constraint was to explore a{" "}
            <strong className="text-emphasis">
              purely mechanical closed-cache system
            </strong>{" "}
            rather than relying on a separate electronically controlled closure.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Designed a drilling and sample-cache mechanism for a Mars Rover,
            including a mechanically closed cache intended to satisfy URC-style
            sample-storage requirements.
          </li>
          <li>
            Modeled the mechanism from scratch in{" "}
            <strong className="text-emphasis">OnShape</strong>, then refined the
            geometry through repeated 3D printing, assembly, testing, and
            redesign.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            Worked as a member of the Mechanical Team, owning mechanism design
            work from early CAD exploration to printable prototype iterations.
          </li>
          <li>
            Explored mechanical structures for sample collection and cache
            closure, created printable parts, assembled prototypes, and tested
            failure points.
          </li>
          <li>
            Discussed mechanical integration with teammates so the drilling and
            cache subsystem could fit into the broader rover architecture.
          </li>
        </ul>
      </ProjectDetailSection>

      <section className="project-detail-card-section">
        <div className="project-detail-card-section-heading">
          <h2>Build-Test-Iterate</h2>
        </div>
        <div className="project-detail-card-grid">
          {iterationCards.map((card) => (
            <article className="project-detail-mini-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            This experience changed how I think about engineering: instead of
            stopping at analysis or research ideas, I experienced the full
            physical loop of building, breaking, redesigning, and improving a
            mechanism.
          </li>
          <li>
            Seeing a mechanism move correctly after multiple iterations gave me
            a stronger sense of ownership over practical hardware development.
          </li>
          <li>
            It strengthened my interest in{" "}
            <strong className="text-emphasis">
              space robotics, rapid prototyping, and hands-on mechanical design
            </strong>
            .
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
