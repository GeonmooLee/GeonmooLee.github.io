import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectAssetSrc } from "../../utils/projectAssets";

const projectId = "notisnu";

export default function NotiSnuPage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title={project?.title || "NotiSNU"}
        period={project?.period || "2025.09 - 2025.12"}
        description={
          project?.description ||
          "A web service that turns scattered SNU notices into a personalized information discovery experience."
        }
        meta={[
          {
            label: "Organization",
            value: "1st SNU Generative AI Utilization Competition",
          },
          {
            label: "Role",
            value: "Idea proposal, full-stack development, RAG pipeline",
          },
          {
            label: "Focus",
            value: "AI-native web service, recommendation, RAG search",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "Step_1.gif"),
            alt: "NotiSNU random recommendation demo",
            caption: "<Recommendation>",
          },
          {
            src: getProjectAssetSrc(projectId, "Step_2.gif"),
            alt: "NotiSNU chatbot demo",
            caption: "<RAG Chatbot>",
          },
          {
            src: getProjectAssetSrc(projectId, "Step_3.gif"),
            alt: "NotiSNU like recommendation demo",
            caption: "<Like-based Feed>",
          },
        ]}
        imageOptions={{
          maxWidth: "1200px",
          height: "400px",
          tabletHeight: "210px",
          mobileHeight: "200px",
          minItemWidth: "320px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "step_total.mp4"),
            alt: "NotiSNU full product demo video",
            caption: "<Full Product Demo Video>",
            type: "video",
          },
        ]}
        imageOptions={{
          maxWidth: "1200px",
          height: "600px",
          tabletHeight: "430px",
          mobileHeight: "240px",
          minItemWidth: "320px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Project Links">
        <ul>
          <li>
            Frontend:{" "}
            <a
              href="https://github.com/GeonmooLee/2025_GenAI_Contest_Front"
              target="_blank"
              rel="noreferrer"
            >
              github.com/GeonmooLee/2025_GenAI_Contest_Front
            </a>
          </li>
          <li>
            Backend:{" "}
            <a
              href="https://github.com/GeonmooLee/2025_GenAI_Contest_Back"
              target="_blank"
              rel="noreferrer"
            >
              github.com/GeonmooLee/2025_GenAI_Contest_Back
            </a>
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="User Problem">
        <ul>
          <li>
            SNU notices and activity information are scattered across channels
            such as mySNU, department websites, colleges, and the career
            development center, so students can easily miss opportunities unless
            they search manually.
          </li>
          <li>
            For deadline-sensitive information such as scholarships,
            internships, research opportunities, and competitions, the larger
            problem is often not a lack of opportunities but failing to discover
            the right information in time.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Built a unified feed where notices from multiple sources can be
            browsed and filtered from a single screen.
          </li>
          <li>
            Designed a RAG chatbot that answers questions based on notice data
            and provides source links for verification.
          </li>
          <li>
            Recommended notices based on a student's department, interests, and
            liked-notice history.
          </li>
          <li>
            Added random recommendations outside the user's stated interests so
            students can discover unexpected opportunities.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            Started from the personal frustration that SNU notices were too
            scattered, then shaped it into an AI-powered integrated notice and
            recommendation web service idea.
          </li>
          <li>
            Implemented the service full-stack with a{" "}
            <strong className="text-emphasis">React frontend</strong> and{" "}
            <strong className="text-emphasis">FastAPI backend</strong>.
          </li>
          <li>
            Generated dummy notice data with an LLM and built the vector
            embedding pipeline for semantic search and RAG responses.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            Implemented AI-native service features including AI summaries,
            classification, embeddings, search, personalized recommendations,
            like-based re-ranking, and RAG answers.
          </li>
          <li>
            Connected React, FastAPI, MongoDB, and Qdrant into a working web
            product,{" "}
            <strong className="text-emphasis">
              gaining hands-on experience with product architecture and
              development flow
            </strong>
            .
          </li>
          <li>
            Won the{" "}
            <strong className="text-emphasis">
              Grand Prize (1st place) at the SNU Generative AI Utilization
              Competition
            </strong>
            .
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
