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
    period: "2025.07 - 2025.08",
    title: "Research Internship",
    org: "Mand.ro (Prosthetic Startup)",
    bullets: [
      "Improved the IMU-based control pipeline for Mand.ro's Mark 7D prosthetic hand, including RF latency compensation and grasp decision logic.",
      "Logged and analyzed MPU6050 sensor data with Python/CSV workflows while tuning thresholds, gyro ranges, and control periods.",
      "Supported hardware fabrication through BLDC motor assembly, Hall sensor soldering, PCB work, battery-pack tasks, and Rhino-based test-jig redesign.",
    ],
    detailPath: "/experience/mand-ro-internship",
  },
  {
    id: "hero-lab-ugr",
    period: "2024.12 - 2025.06",
    title: "Undergraduate Researcher",
    org: "HERO Lab (SNU ME)",
    bullets: [
      "Investigated low-cost surface EMG acquisition and grasp classification for prosthetic hand control.",
      "Built a MyoWare v2 + Arduino + Bluetooth acquisition setup and compared electrode positions with SVM, 1D-CNN, and GRU models.",
    ],
    detailPath: "/experience/hero-lab-ugr",
  },
  {
    id: "pb-lab-ugr",
    period: "2024.01 - 2024.06",
    title: "Undergraduate Researcher",
    org: "PB Lab (SNU ME)",
    bullets: [
      "Explored single-cell segmentation and morphology quantification for microglia activation-state analysis.",
      "Connected Cellpose-generated masks with a MATLAB morphology-analysis pipeline for downstream parameter extraction.",
    ],
    detailPath: "/experience/pb-lab-ugr",
  },
  {
    id: "idim-ugr",
    period: "2022.07 - 2022.08",
    title: "Undergraduate Researcher",
    org: "IDIM (SNU ME)",
    bullets: [
      "Built a smart electricity-generating door closer with CAD and Arduino.",
      "Used OpenCV and Arduino to develop a tendon-driven robot.",
    ],
    detailPath: "/experience/idim-ugr",
  },
];
