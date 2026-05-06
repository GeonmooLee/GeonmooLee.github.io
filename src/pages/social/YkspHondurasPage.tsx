import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/impact/yksp-honduras`;

export default function YkspHondurasPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="YKSP Honduras Dispatch"
        period="2024.10 - 2025.11 / 8th YKSP Program"
        description="Participated in the KDI and MOEF YKSP program supporting a digital registration system for vulnerable populations in Honduras."
        backTo="/impact"
        backLabel="Back to Social Impact"
        meta={[
          {
            label: "Organization",
            value: "KDI & MOEF",
          },
          {
            label: "Program",
            value: "8th YKSP Program / Honduras",
          },
          {
            label: "Focus",
            value: "Digital registration, field dispatch, bilateral meetings",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/01.jpg`,
            alt: "YKSP Honduras dispatch field activity photo",
            caption: "<Honduras Dispatch>",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/02.jpg`,
            alt: "YKSP Honduras official meeting photo",
            caption: "<Bilateral Coordination>",
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
            Participated in establishing a digital registration system for
            vulnerable populations through the YKSP Honduras project.
          </li>
          <li>
            Completed two on-site dispatches and worked with SEDESOL officials
            while supporting high-level coordination meetings.
          </li>
          <li>
            Supported logistics and documented official minutes for bilateral
            discussions.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
