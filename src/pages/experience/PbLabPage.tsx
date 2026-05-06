import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
const assetBaseUrl = `${publicUrl}/experience/pb-lab`;

export default function PbLabPage() {
  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title="PB Lab — Microglia Morphology Image Analysis"
        period="2024.01 - 2024.06 / PB Lab, SNU Mechanical Engineering"
        description="Explored single-cell segmentation and morphology quantification for microglia activation-state analysis, connecting Cellpose-based masks with MATLAB morphology analysis."
        backTo="/experience"
        backLabel="Back to Experience"
        meta={[
          {
            label: "Organization",
            value: "PB Lab, Seoul National University",
          },
          {
            label: "Role",
            value:
              "Literature review, segmentation comparison, morphology pipeline implementaion",
          },
          {
            label: "Focus",
            value: "Bioimage analysis, Cellpose, MATLAB image processing",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: `${assetBaseUrl}/cellpose-segmentation.png`,
            alt: "Cellpose-based segmentation result for microglia microscopy image",
            caption: "<Cellpose-Based Cell Segmentation>",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
          {
            src: `${assetBaseUrl}/matlab-segmentation.png`,
            alt: "MATLAB-based segmentation result for microglia microscopy image",
            caption: "<MATLAB-Based Cell Segmentation>",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "1400px",
          height: "420px",
          tabletHeight: "320px",
          mobileHeight: "230px",
          minItemWidth: "320px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="Overview">
        <ul>
          <li>
            Worked on the early-stage image-analysis pipeline for classifying
            microglia activation states through cell morphology.
          </li>
          <li>
            Since activated and non-activated microglia show different shapes,
            the first technical bottleneck was reliable single-cell segmentation
            and quantitative morphology extraction.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Research Context">
        <ul>
          <li>
            Reviewed papers on microglia morphology, morphometric analysis
            parameters, and cluster-based cell-state categorization.
          </li>
          <li>
            Studied how ramified and amoeboid-like morphology can be translated
            into measurable descriptors before downstream activation-state
            analysis.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Problem">
        <ul>
          <li>
            Cellpose provided strong segmentation performance, especially for
            overlapping cells, but it was difficult to verify whether each
            segmentation was biologically valid.
          </li>
          <li>
            MATLAB-based classical vision was more interpretable through Canny
            edge detection and rule-based filtering, but its yield dropped when
            cells overlapped or boundaries were unclear.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="What I Built / Did">
        <ul>
          <li>
            Tested Cellpose default models and human-in-the-loop custom training
            results for single-cell segmentation.
          </li>
          <li>
            Built a workflow to use Cellpose-generated mask images inside MATLAB
            for downstream morphology-parameter extraction.
          </li>
          <li>
            Explored preprocessing options including 8-bit / 16-bit
            normalization and 2D Fourier high-pass filtering for denoising and
            boundary enhancement.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Key Results">
        <ul>
          <li>
            Connected Cellpose segmentation outputs with MATLAB morphology
            analysis instead of treating the two approaches as separate tools.
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
