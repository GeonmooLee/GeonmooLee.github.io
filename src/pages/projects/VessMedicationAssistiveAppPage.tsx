import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectAssetSrc } from "../../utils/projectAssets";

const projectId = "vess-medication-assistive-app";

export default function VessMedicationAssistiveAppPage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title={project?.title || "MediBox & What-Medicine Assistive System"}
        period={project?.period || "2022.05 - 2023.06 / VESS"}
        description={
          project?.description ||
          "An assistive medication management device and app designed to help visually impaired users identify medicines, organize doses, and access medication information more independently."
        }
        meta={[
          { label: "Organization", value: "student club VESS" },
          {
            label: "Role",
            value:
              "Problem framing, CAD review, OCR/YOLO exploration, FastAPI backend",
          },
          {
            label: "Focus",
            value: "Assistive technology, medication accessibility, AI/web",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "01.jpg"),
            alt: "MediBox prototype being tested with the medication recognition app",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: getProjectAssetSrc(projectId, "02.png"),
            alt: "MediBox compartment design with organized medicine packages",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
          {
            src: getProjectAssetSrc(projectId, "03.png"),
            alt: "What-Medicine app screens for medication search and recognition",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          height: "240px",
          tabletHeight: "220px",
          mobileHeight: "210px",
          minItemWidth: "260px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="User Problem">
        <ul>
          <li>
            For visually impaired users, many over-the-counter medicines have
            similar shapes and packaging, making it difficult to distinguish the
            right medication without relying on someone else.
          </li>
          <li>
            Existing text-recognition apps often require users to photograph
            medicine labels accurately and still make it hard to check dosage,
            directions, and side effects in one flow.
          </li>
          <li>
            Through interviews and surveys with visually impaired users, 7 out
            of 9 respondents reported real difficulty during the medication
            process.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Proposed <strong className="text-emphasis">MediBox</strong>, a
            medicine storage box with Braille and enlarged labels, together with{" "}
            <strong className="text-emphasis">What-Medicine</strong>, an app for
            medicine identification and information access.
          </li>
          <li>
            Divided the storage box into six compartments so users could
            organize medicines by type and reduce the chance of picking the
            wrong package.
          </li>
          <li>
            Designed a phone cradle and tactile center guide to reduce camera
            alignment failures, and planned the app to provide medicine names
            and key instructions through audio feedback.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            Framed the accessibility problem around medication use and daily
            medicine management for visually impaired users.
          </li>
          <li>
            Reviewed the MediBox CAD design and explored OCR/YOLO-based
            recognition approaches for identifying medicine packages.
          </li>
          <li>
            Designed the FastAPI backend server to connect the mobile app with
            the AI model and medication information flow.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            Built an AI model for 43 high-volume over-the-counter medicines and
            achieved roughly 90-95% classification accuracy.
          </li>
          <li>
            Earned an{" "}
            <strong className="text-emphasis">
              Encouragement Award and Poster Presentation Award at the 2022 SNU
              Social Contribution PLUS+ Competition
            </strong>
            , and received the{" "}
            <strong className="text-emphasis">
              Minister of Trade, Industry and Energy Award at the 14th Creative
              Design Competition
            </strong>
            .
          </li>
          <li>
            Recognized that competition success did not automatically lead to
            real-world user validation or distribution, clarifying the gap
            between a strong prototype and sustained deployment.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
