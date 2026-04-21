export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  org: string;
  location?: string;
  bullets: string[];
  detailPath: string;
};

// Seeded from your resume's "Experience" section.
// Keep this data-only: add/edit items here and the UI updates automatically.
export const experienceItems: ExperienceItem[] = [
  {
    id: "mand-ro-internship",
    period: "2025.07 – 2025.08",
    title: "Research Internship",
    org: "Mand.ro (Prosthetic Startup)",
    bullets: [
      "Improved embedded algorithms for IMU-based motion tracking and RF communication latency; applied MCU settings such as sleep mode.",
      "Assembled/soldered PCBs, BLDC motor modules, and sensors; diagnosed noise/vibration issues and ensured reliable control for robotic prostheses.",
      "Created support tools using Rhino and 3D printing to aid in prosthesis testing and development.",
    ],
    detailPath: "/experience/mand-ro-internship",
  },
  {
    id: "hero-lab-ugr",
    period: "2024.12 – 2025.06",
    title: "Undergraduate Researcher",
    org: "HERO Lab (SNU ME)",
    bullets: [
      "Researched single-channel surface EMG (sEMG) systems for low-cost motion classification in prosthetic applications.",
      "Designed electrode placement strategies, implemented preprocessing pipelines, and built acquisition setups.",
    ],
    detailPath: "/experience/hero-lab-ugr",
  },
  {
    id: "pb-lab-ugr",
    period: "2024.01 – 2024.06",
    title: "Undergraduate Researcher",
    org: "PB Lab (SNU ME)",
    bullets: [
      "Conducted single-cell segmentation research to classify microglia activation states based on morphological parameters.",
      "Implemented deep learning–based segmentation with Cellpose (Python) and classical vision algorithms (Matlab).",
    ],
    detailPath: "/experience/pb-lab-ugr",
  },
  {
    id: "idim-ugr",
    period: "2022.07 – 2022.08",
    title: "Undergraduate Researcher",
    org: "IDIM (SNU ME)",
    bullets: [
      "Built a smart (electricity-generating) door closer with CAD and Arduino.",
      "Using OpenCV and Arduino to develop tendon-driven robot.",
    ],
    detailPath: "/experience/idim-ugr",
  },
];
