import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectImageSrc } from "../../utils/projectAssets";

const projectId = "vess-vacancy-detector";

export default function VessVacancyDetectorPage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title={project?.title || "Vacancy Detector for Visually Impaired"}
        period={project?.period || "2021.06 - 2022.01"}
        description={
          project?.description ||
          "A portable Arduino-based assistive device prototype designed to help visually impaired commuters identify vacant seats on public transit more independently."
        }
        meta={[
          { label: "Organization", value: "student club VESS 6th" },
          {
            label: "Role",
            value: "Idea proposal, interview design, Arduino prototyping",
          },
          {
            label: "Focus",
            value: "Assistive technology, hardware prototyping",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectImageSrc(projectId, 1),
            alt: "Arduino-based vacancy detector prototype",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "490px",
          height: "auto",
          minItemWidth: "490px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="User Problem">
        <ul>
          <li>
            Visually impaired commuters often have difficulty identifying vacant
            seats after boarding public transit and may feel burdened by having
            to ask nearby passengers for help.
          </li>
          <li>
            Through interviews with the Seoul Association of the Visually
            Impaired, more than half of 9 potential users described the
            difficulty of finding empty subway seats as a real inconvenience
            during travel.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Proposed a{" "}
            <strong className="text-emphasis">portable vacancy detector</strong>{" "}
            that does not rely on camera apps or seat-mounted infrastructure.
          </li>
          <li>
            When the user points the device toward a seat and presses a button,
            an infrared temperature sensor detects body heat and temperature
            differences, then communicates whether the seat is occupied through
            vibration.
          </li>
          <li>
            Based on interview feedback, adopted a card-shaped form factor that
            users could hold and operate by hand.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            Proposed the initial idea around the problem of identifying vacant
            subway seats for visually impaired commuters.
          </li>
          <li>
            Helped design and conduct surveys and phone interviews for welfare
            centers and related associations.
          </li>
          <li>
            Implemented the temperature-based Arduino algorithm and built the
            working prototype.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            Completed the prototype, physical case, and demo video, earning an
            Encouragement Award at the{" "}
            <strong className="text-emphasis">
              13th Creative Design Competition
            </strong>
            .
          </li>
          <li>
            Recognized the limitation that the project stopped at a competition
            award and did not reach real-world user validation or deployment.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
