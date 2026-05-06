import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/impact/k-lab-digital-transformers`;

export default function KLabDigitalTransformersPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="K-lab Digital Transformers"
        period="2021.09 - 2022.12 / SNUSR"
        description="Provided ICT education and collaborated on appropriate technology activities through the K-lab Digital Transformers program."
        backTo="/impact"
        backLabel="Back to Social Impact"
        meta={[
          {
            label: "Organization",
            value: "SNUSR (Seoul National University Social Responsibility)",
          },
          {
            label: "Location",
            value: "Ulleung High School / Laos collaboration",
          },
          {
            label: "Focus",
            value:
              "ICT education, Python, Raspberry Pi, appropriate technology",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/01.png`,
            alt: "K-lab Digital Transformers ICT education activity",
            caption: "<ICT Education>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "left",
            },
          },
          {
            src: `${assetBaseUrl}/02.png`,
            alt: "K-lab Digital Transformers collaboration activity",
            caption: "<ICT Education in Ulleung High School>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/03.png`,
            alt: "K-lab Digital Transformers appropriate technology activity",
            caption: "<Appropriate Technology>",
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
            Provided ICT education, including Python and Raspberry Pi, both
            remotely and in person.
          </li>
          <li>
            Collaborated with Laos students on appropriate technology projects
            in the environment domain.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
