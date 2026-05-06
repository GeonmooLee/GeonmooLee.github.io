import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const posterUrl =
  process.env.REACT_APP_HERO_LAB_RESEARCH_URL ||
  `${publicUrl}/experience/hero-lab-semg-poster.pdf`;

export default function HeroLabPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="HERO Lab — sEMG-Based Prosthetic Hand Research"
        period="2024.12 - 2025.06 / HERO Lab, SNU Mechanical Engineering"
        description="Investigated low-cost surface EMG acquisition and grasp classification for prosthetic hand control, from sensor setup and Bluetooth data logging to electrode-placement experiments and ML evaluation."
        backTo="/experience"
        backLabel="Back to Experience"
        meta={[
          {
            label: "Organization",
            value: "HERO Lab, Seoul National University",
          },
          {
            label: "Role",
            value:
              "sEMG sensor setup, electrode placement, preprocessing, ML evaluation",
          },
          {
            label: "Focus",
            value: "Prosthetic hand control, low-cost biosignal sensing",
          },
        ]}
      />

      <section className="project-detail-pdf-section">
        <div className="project-detail-pdf-heading">
          <h2>Research Poster</h2>
          <a href={posterUrl} target="_blank" rel="noreferrer">
            Open poster in a new tab
          </a>
        </div>
        <div className="project-detail-pdf-preview">
          <a
            className="project-detail-pdf-preview-open-overlay"
            href={posterUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open research poster preview in a new tab"
            title="Open research poster preview in a new tab"
          />
          <iframe
            title="HERO Lab sEMG research poster PDF preview"
            src={posterUrl}
            loading="lazy"
          />
        </div>
      </section>

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Worked toward the broader goal of controlling soft prosthetic hands
            and rehabilitation robotic gloves using surface EMG signals.
          </li>
          <li>
            Owned the experimental pipeline around{" "}
            <strong className="text-emphasis">
              sEMG sensor selection, electrode placement, data acquisition,
              preprocessing, and grasp classification feasibility
            </strong>
            .
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Problem">
        <ul>
          <li>
            Commercial multi-channel EMG systems are often expensive, bulky, and
            difficult to use in low-cost prosthetic hand applications.
          </li>
          <li>
            Surface EMG is highly sensitive to noise, electrode placement,
            grounding, posture, and day-to-day reproducibility.
          </li>
          <li>
            The core research question was whether a practical grasp
            classification pipeline could work with only a single or small
            number of low-cost sEMG channels.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="What I Built / Did">
        <ul>
          <li>
            Built a data acquisition setup using{" "}
            <strong className="text-emphasis">
              MyoWare v2, Arduino Uno, and HC-06 Bluetooth
            </strong>
            .
          </li>
          <li>
            Implemented real-time Python visualization and CSV logging for EMG
            signal collection.
          </li>
          <li>
            Used MATLAB and Python for preprocessing and feature extraction,
            including LPF, RMS, MAV, and FFT-based analysis.
          </li>
          <li>
            Collected four grasp classes: power, pinch, tripod, and lateral
            grasps.
          </li>
          <li>
            Compared five electrode positions, single-channel and dual-channel
            combinations, and SVM, 1D-CNN, and GRU classifiers.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Key Results">
        <ul>
          <li>
            Built a dataset of{" "}
            <strong className="text-emphasis">48 self-collected EMG CSVs</strong>
            : four grasp types across repeated electrode-placement experiments.
          </li>
          <li>
            Best single-channel result:{" "}
            <strong className="text-emphasis">
              87.03% accuracy with 1D-CNN at ch4
            </strong>
            .
          </li>
          <li>
            Best dual-channel result:{" "}
            <strong className="text-emphasis">
              95.14% accuracy with 1D-CNN at ch3 + ch4
            </strong>
            .
          </li>
          <li>
            Most high-performing dual-channel combinations included ch4,
            suggesting that electrode placement was as important as model
            selection.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Reflection">
        <ul>
          <li>
            Learned that before modeling, research quality in biosignal systems
            is shaped by grounding, power noise, posture control, electrode
            repeatability, and data collection discipline.
          </li>
          <li>
            Rather than claiming a complete prosthetic hand controller, this
            work established an{" "}
            <strong className="text-emphasis">
              sEMG grasp-recognition pipeline and electrode-placement analysis
              for future prosthetic hand control
            </strong>
            .
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
