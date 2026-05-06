import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/impact/forest-of-talent`;

export default function ForestOfTalentPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="Forest of Talent Scholarship — Book Project"
        period="2024.02 - 2025.02 / Korea Foundation for Advanced Studies"
        description="Authored a book project supported by the Forest of Talent Scholarship, focusing on undocumented migrant children."
        backTo="/impact"
        backLabel="Back to Social Impact"
        meta={[
          {
            label: "Organization",
            value: "Korea Foundation for Advanced Studies",
          },
          {
            label: "Location",
            value: "Korea",
          },
          {
            label: "Focus",
            value: "Book project, migrant children, scholarship",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/01.jpg`,
            alt: "Forest of Talent Scholarship book project photo",
            caption: "<Forest of Talent Scholarship>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "900px",
          height: "520px",
          tabletHeight: "360px",
          mobileHeight: "260px",
          minItemWidth: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Authored a book titled{" "}
            <strong className="text-emphasis">
              Shadow Children: Undocumented Migrant Children
            </strong>
            .
          </li>
          <li>Awarded a merit-based stipend of 10,000,000 KRW.</li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
