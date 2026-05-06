import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectAssetSrc } from "../../utils/projectAssets";

const projectId = "tactile-art-guide";

export default function TactileArtGuidePage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title={
          project?.title ||
          "Tactile Exhibition Guide Device for Visually Impaired Visitors"
        }
        period={project?.period || "2025.03 - 2025.06 / SNU SCSR"}
        description={
          project?.description ||
          "A wearable indoor positioning guide device that estimates a visitor's location and orientation in an exhibition space and sends navigation cues to a mobile app."
        }
        meta={[
          {
            label: "Organization",
            value: "SNU Student Council for Social Responsibility(SNU SCSR)",
          },
          {
            label: "Role",
            value:
              "Device team lead, UWB localization, sensor integration, exhibition operation",
          },
          {
            label: "Focus",
            value: "Indoor positioning, assistive technology, embedded systems",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "01.jpg"),
            alt: "Wearable tactile exhibition guide device prototype",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
          {
            src: getProjectAssetSrc(projectId, "02.jpg"),
            alt: "Device being tested inside an exhibition space",
            imageOptions: {
              objectFit: "cover",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          height: "450px",
          tabletHeight: "250px",
          mobileHeight: "220px",
          minItemWidth: "300px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="User Problem">
        <ul>
          <li>
            Visually impaired visitors often have difficulty locating artworks
            independently during exhibitions and may struggle to confirm where
            they are within the gallery space.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Developed a wearable indoor positioning device that sends the user's
            location and direction to a mobile app.
          </li>
          <li>
            Initially explored beacon RSSI, IMU-based relative positioning,
            visual markers, and RFID, then switched to UWB localization based on
            signal stability, scalability, and feasibility of on-site
            installation.
          </li>
          <li>
            Installed three UWB tags in the exhibition space, calculated the
            user's coordinates through trilateration, estimated direction using
            a geomagnetic sensor, and transmitted the result to the app via
            Bluetooth.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            <strong className="text-emphasis">Led the device team</strong> by
            setting the technical roadmap, researching and purchasing
            components, assigning roles, and coordinating weekly development
            priorities.
          </li>
          <li>
            Collaborated with the planning and app teams, sharing user scenarios
            and accessibility feedback from previous assistive device projects.
          </li>
          <li>
            Supported the actual exhibition operation by designing experiment
            parameters, debugging, managing power, and preparing user manuals.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            Unlike previous projects that remained at the competition or
            prototype stage,{" "}
            <strong className="text-emphasis">
              this device was installed in a real exhibition and tested through
              direct user interaction on site
            </strong>
            .
          </li>
          <li>
            Through three days of exhibition operation, gained productization
            experience that went beyond technical implementation, including
            installation constraints, user flow, and operational stability.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
