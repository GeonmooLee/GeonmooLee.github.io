import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const demoVideoUrl = "https://www.youtube-nocookie.com/embed/H9asEulrjpU";
const demoVideoUrl2 = "https://www.youtube-nocookie.com/embed/0qvtpvSa69w";

const videoGridOptions = {
  "--project-detail-video-grid-max-width": "1400px",
  "--project-detail-video-grid-columns":
    "minmax(0, 2.25fr) minmax(220px, 1.25fr)",
  "--project-detail-video-grid-gap": "5px",
} as React.CSSProperties;

const mainVideoWindowOptions = {
  "--project-detail-video-window-width": "100%",
  "--project-detail-video-window-ratio": "16 / 9",
  "--project-detail-video-window-align": "stretch",
} as React.CSSProperties;

const shortsVideoWindowOptions = {
  "--project-detail-video-window-width": "400px",
  "--project-detail-video-window-ratio": "9 / 16",
  "--project-detail-video-window-align": "center",
} as React.CSSProperties;

export default function MandRoInternshipPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="Mand.ro — Research Internship"
        period="2025.06.24 - 2025.08.29 / Mand.ro"
        description="IMU-based prosthetic hand control and prototype fabrication internship, focused on firmware analysis, RF latency compensation, sensor logging, and hands-on prosthetic hardware assembly."
        backTo="/experience"
        backLabel="Back to Experience"
        meta={[
          {
            label: "Organization",
            value: "Mand.ro, prosthetic hand startup",
          },
          {
            label: "Role",
            value:
              "Firmware analysis, IMU logging, algorithm tuning, fabrication support",
          },
          {
            label: "Focus",
            value: "IMU-based prosthetic control, RF latency, hardware R&D",
          },
        ]}
      />

      <section className="project-detail-video-section">
        <div className="project-detail-video-heading">
          <h2>Mark 7D</h2>
          <a href={demoVideoUrl} target="_blank" rel="noreferrer">
            Open video on YouTube
          </a>
        </div>
        <div className="project-detail-video-grid" style={videoGridOptions}>
          <div
            className="project-detail-video-frame project-detail-video-frame-wide"
            style={mainVideoWindowOptions}
          >
            <iframe
              title="Mand.ro prosthetic hand prototype demo"
              src={demoVideoUrl}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div
            className="project-detail-video-frame project-detail-video-frame-shorts"
            style={shortsVideoWindowOptions}
          >
            <iframe
              title="Mand.ro prosthetic hand short demo"
              src={demoVideoUrl2}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Investigated and improved the IMU-based control pipeline of{" "}
            <strong className="text-emphasis">
              Mand.ro's wearable Mark 7D prosthetic hand
            </strong>
            .
          </li>
          <li>
            Worked across sensor data acquisition, firmware modification,
            hardware fabrication support, and test-jig design so control
            behavior could be evaluated on the actual prosthetic hardware.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Problem">
        <ul>
          <li>
            RF communication between the finger controller and the hand
            introduced roughly{" "}
            <strong className="text-emphasis">80-120 ms of latency</strong>,
            making direct sensor comparison unreliable.
          </li>
          <li>
            MPU6050 IMU axes were not perfectly aligned, so even rigid-body
            rotation could trigger false grasp or release behavior.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="What I Did">
        <ul>
          <li>
            Analyzed the firmware architecture around MPU6050, ATtiny3217, and
            nRF24L01 modules.
          </li>
          <li>
            Implemented and inspected the data path across Finger Controller,
            Hand, and RF Receiver modules.
          </li>
          <li>
            Compared EMA-based and SMA-based grasp decision logic while tuning
            acceleration limits, gyro limits, thresholds, and 20/30/40 ms
            control periods.
          </li>

          <li>
            Supported BLDC motor assembly, Hall sensor soldering, motor testing,
            wire crimping, PCB soldering, battery-pack work, and robotic-arm
            assembly.
          </li>
          <li>
            Redesigned a Rhino-based finger tester base to reduce cable
            interference during testing.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Key Results">
        <ul>
          <li>
            Decomposed rigid-rotation false positives into two major causes: RF
            latency and IMU-axis mismatch.
          </li>
          <li>
            <strong className="text-emphasis">
              Reduced false-positive grasp behavior
            </strong>{" "}
            by introducing a 3-step delay buffer and tuning threshold and limit
            conditions.
          </li>
          <li>
            Selected SMA-based decision logic for the final version because it
            was more robust to vibration and natural hand motion than the EMA
            alternative.
          </li>
          <li>
            Chose a{" "}
            <strong className="text-emphasis">40 ms control period</strong> as
            the most stable option after testing faster 20 ms and 30 ms
            alternatives.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Reflection">
        <ul>
          <li>
            Learned that embedded control quality in prosthetic hardware depends
            not only on algorithms, but also on RF timing, sensor alignment,
            mechanical constraints, and repeatable testing setups.
          </li>
          <li>
            <strong className="text-emphasis">
              Explored rotation-matrix and quaternion-based axis correction
            </strong>{" "}
            as anext improvement direction, treating it as a research path
            rather than overstating it as a completed control solution.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
