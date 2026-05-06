import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/impact/tokyo-forum`;

export default function TokyoForumPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="Youth Delegate, 2024 Tokyo Forum"
        period="2024.11 / Tokyo Forum"
        description="Collaborated with University of Tokyo students to analyze the low birth rate crisis in Korea and Japan and present joint policy ideas."
        backTo="/impact"
        backLabel="Back to Social Impact"
        meta={[
          {
            label: "Organization",
            value: "Chey Institute, University of Tokyo",
          },
          {
            label: "Location",
            value: "Tokyo, Japan",
          },
          {
            label: "Focus",
            value: "Youth dialogue, policy discussion, Korea-Japan issues",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/01.jpg`,
            alt: "Youth Delegate group activity at the 2024 Tokyo Forum",
            caption: "<Tokyo Forum>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/02.jpg`,
            alt: "Tokyo Forum presentation and discussion photo",
            caption: "<Policy Presentation>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "1400px",
          height: "430px",
          tabletHeight: "300px",
          mobileHeight: "230px",
          minItemWidth: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Collaborated with University of Tokyo students to analyze the low
            birth rate crisis in Korea and Japan.
          </li>
          <li>
            Proposed and presented joint policy solutions to global scholars and
            leaders at the 2024 Tokyo Forum.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
