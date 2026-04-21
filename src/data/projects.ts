// Projects 부분에 들어가는 데이터
// 이 부분을 수정하는게 새로운 Project 페이지를 만드는 것이다.

import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";

export type ProjectCategoryId = string;

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  period: string;
  /**
   * Sorting key for "latest first".
   * Format: YYYYMM (e.g. 202512). For semester-only items, use a reasonable month (e.g. fall -> 202509).
   */
  sortKey: number;
  image: string;
  categoryId: ProjectCategoryId;
  highlight?: boolean;
  // External links (optional). Detail page can show these as buttons.
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
    video?: string;
  };
  // Placeholder for detail page content. Replace with your real content later.
  detail?: {
    summary?: string;
    bullets?: string[];
    media?: Array<
      | { type: "youtube"; title?: string; url: string }
      | { type: "image"; title?: string; src: string }
    >;
  };
};

export type ProjectCategory = {
  id: ProjectCategoryId;
  label: string;
  description?: string;
};

// Categories are data-driven: add/remove/reorder freely.
export const projectCategories: ProjectCategory[] = [
  {
    id: "eng-hardware",
    label: "Engineering Project - Hardware",
    description:
      "Mechanical design, circuits, embedded systems, and robotics control projects.",
  },
  {
    id: "eng-software",
    label: "Engineering Project - Software, AI & Web",
    description:
      "Full-stack web, AI/ML, and low-level computing projects (architecture, Verilog, data structures).",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "notisnu",
    title: "NotiSNU (SNU Generative AI Competition – Grand Prize)",
    description:
      "SNU notice notifier platform (dummy description for layout). Replace with your final description.",
    period: "2025.12",
    sortKey: 202512,
    image: mock10,
    categoryId: "eng-software",
    highlight: true,
    links: {},
    detail: {
      summary:
        "Detail page template (dummy). Replace with your story: problem → approach → outcomes.",
      bullets: [
        "What you built",
        "Key technical decisions",
        "Impact / results",
      ],
      media: [],
    },
  },
  {
    id: "prompt-eer",
    title: "PROMPTeer (LikeLion @ SNU)",
    description:
      "Prompt engineering education platform built with FastAPI and React (dummy description).",
    period: "2025.03 – 2025.12",
    sortKey: 202512,
    image: mock09,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "how-much",
    title: "How Much? (LikeLion @ SNU)",
    description:
      "Second-hand price estimation web service built with FastAPI and React (dummy description).",
    period: "2025.03 – 2025.12",
    sortKey: 202512,
    image: mock08,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "tactile-art-guide",
    title: "Tactile Art Exhibition Guide Device (SNUSR)",
    description:
      "Handheld assistive device combining IMU motion tracking + UWB indoor localization (dummy description).",
    period: "2025.03 – 2025.06",
    sortKey: 202506,
    image: mock07,
    categoryId: "eng-hardware",
    highlight: true,
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "reverse-engineering-air-stepper",
    title: "Reverse Engineering: Pneumatic Air Stepper",
    description:
      "Mechanism analysis in Fusion 360 + FEA stress tests + MATLAB Simscape knee torque dynamics (dummy description).",
    period: "25-2 (Fall 2025)",
    sortKey: 202509,
    image: mock06,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "analog-biosignal-acquisition",
    title: "Analog Bio-Signal Acquisition System (EMG/EEG/EOG)",
    description:
      "Designed analog front-end circuits (instrumentation amps, band-pass filters) for biosignal measurement (dummy description).",
    period: "25-2 (Fall 2025)",
    sortKey: 202509,
    image: mock05,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "riscv-cpu-verilog",
    title: "RISC-V CPU + Cache (Verilog)",
    description:
      "Designed a 5-stage pipelined RISC-V CPU, branch prediction, and cache memory in Verilog (dummy description).",
    period: "25-1 (Spring 2025)",
    sortKey: 202503,
    image: mock04,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "timeseries-analysis-ml",
    title: "Time-Series Analysis (Machine Learning)",
    description:
      "Multivariate time-series regression analysis (dummy description).",
    period: "25-1 (Spring 2025)",
    sortKey: 202503,
    image: mock03,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "fpga-whac-a-mole",
    title: 'FPGA Mini-Game: "Whac-A-Mole" (Verilog)',
    description:
      "Implemented a digital mini-game and system functions using Verilog on an FPGA board (dummy description).",
    period: "24-2 (Fall 2024)",
    sortKey: 202409,
    image: mock02,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "data-structures-cpp",
    title: "Data Structures from Scratch (C++)",
    description:
      "Implemented BST, B-Tree, Red-Black Tree and more from scratch (dummy description).",
    period: "24-2 (Fall 2024)",
    sortKey: 202409,
    image: mock01,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "griptok-injection-molding",
    title: "Griptok Injection Molding & Mass Production",
    description:
      "Designed a two-part injection mold using SolidWorks (DFM) and manufactured 100+ units (dummy description).",
    period: "23-1 (Spring 2023)",
    sortKey: 202303,
    image: mock10,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "smart-eraser",
    title: "Smart Eraser (Mechatronics)",
    description:
      "Fusion 360 mechanical design + electromagnet modules + custom power circuit integration (dummy description).",
    period: "23-1 (Spring 2023)",
    sortKey: 202303,
    image: mock09,
    categoryId: "eng-hardware",
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "analog-noise-meter",
    title: "Analog Noise Level Meter (Op-Amp + Filters)",
    description:
      "Designed purely analog sound measurement system; migrated breadboard prototype to custom PCB (dummy description).",
    period: "23-1 (Spring 2023)",
    sortKey: 202303,
    image: mock08,
    categoryId: "eng-hardware",
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "puzzloops",
    title: "PuzzLoops (C++ / OpenGL Game Project)",
    description:
      "2D puzzle game built with custom rendering + collision logic (dummy description).",
    period: "22-2 (Fall 2022)",
    sortKey: 202209,
    image: mock07,
    categoryId: "eng-software",
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "legged-robot-ced",
    title: "Legged Robot (Creative Engineering Design Contest)",
    description:
      "Designed a legged locomotion mechanism and implemented dual-mode control (manual / autonomous) with Arduino + sensors (dummy description).",
    period: "21-2 (Fall 2021)",
    sortKey: 202109,
    image: mock06,
    categoryId: "eng-hardware",
    highlight: true,
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "vess-vacancy-detector",
    title: "Vacancy Detector for Public Transit (VESS)",
    description:
      "Arduino-based device to detect available seats for visually impaired commuters (dummy description).",
    period: "2021",
    sortKey: 202106,
    image: mock05,
    categoryId: "eng-hardware",
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "vess-medication-assistive-app",
    title: "Medication Assistive Device & App (VESS)",
    description:
      "Flutter + FastAPI + YOLO-based assistance for medication information (dummy description).",
    period: "2022 – 2023",
    sortKey: 202312,
    image: mock04,
    categoryId: "eng-software",
    links: {},
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
];

export function getHighlightedProjects() {
  return projects.filter((p) => p.highlight);
}

export function getProjectById(projectId: string) {
  return projects.find((p) => p.id === projectId);
}
