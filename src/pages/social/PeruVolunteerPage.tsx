import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/impact/peru-volunteer`;

export default function PeruVolunteerPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="SNU Global Volunteer Dispatch"
        period="2024.05 - 2024.08 / SNUSR"
        description="Led and supported education and public-health activities during an SNU Global Volunteer dispatch in Peru."
        backTo="/impact"
        backLabel="Back to Social Impact"
        meta={[
          {
            label: "Organization",
            value: "SNUSR",
          },
          {
            label: "Location",
            value: "Peru",
          },
          {
            label: "Focus",
            value: "Health education, first-aid curriculum, public campaign",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/01.jpg`,
            alt: "SNU Global Volunteer dispatch activity in Peru",
            caption: "<Peru Dispatch>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/02.jpg`,
            alt: "First-aid and health education activity in Peru",
            caption: "<Public Health Campaign>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/03.jpg`,
            alt: "Public health campaign during Peru volunteer dispatch",
            caption: "<Activity Team>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "1400px",
          height: "390px",
          tabletHeight: "280px",
          mobileHeight: "220px",
          minItemWidth: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Led planning for a first-aid training and health education
            curriculum for elementary students.
          </li>
          <li>
            Conducted personal boundary and respect education and organized
            public health campaigns during the dispatch.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
