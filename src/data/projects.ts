// Projects 부분에 들어가는 데이터
// 이 부분을 수정하는게 새로운 Project 페이지를 만드는 것이다.

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
    title: "NotiSNU",
    description:
      "SNU notice notifier platform. SNU Generative AI Competition – Grand Prize.",
    period: "2025.12 / 1st SNU Generative AI Competition",
    sortKey: 202512,
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
    title: "PROMPTeer",
    description:
      "Prompt engineering education platform built with FastAPI and React.",
    period: "2025.07 – 2025.8 / LikeLion @ SNU",
    sortKey: 202512,
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
    title: "How Much?",
    description:
      "Second-hand price estimation web service built with FastAPI and React.",
    period: "2025.09 – 2025.12 / LikeLion @ SNU",
    sortKey: 202512,
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
    title: "Tactile Art Exhibition Guide Device",
    description:
      "Handheld assistive device combining IMU motion tracking + UWB indoor localization.",
    period: "2025.03 – 2025.06 / SNUSR",
    sortKey: 202506,
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
      "Mechanism analysis in Fusion 360 + FEA stress tests + MATLAB Simscape knee torque dynamics.",
    period: "Fall 2025 / Mechanical Product Design",
    sortKey: 202509,
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
    title: "Analog Bio-Signal (EMG/EEG/EOG) Acquisition System ",
    description:
      "Designed analog front-end circuits (instrumentation amps, band-pass filters) for biosignal measurement.",
    period: "Fall 2025 / Bio instrumentation",
    sortKey: 202509,
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
      "Designed a 5-stage pipelined RISC-V CPU, branch prediction, and cache memory in Verilog.",
    period: "Spring 2025 / Computer Organization",
    sortKey: 202503,
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
    title: "Time-Series Analysis with ML",
    description: "Multivariate time-series regression analysis.",
    period: "Spring 2025 / Fundamentals of Machine Learning",
    sortKey: 202503,
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
    title: 'FPGA Mini-Game: "Whac-A-Mole"',
    description:
      "Implemented a digital mini-game and system functions using Verilog on an FPGA board.",
    period: "Fall 2024 / Digital Logic Design and Lab",
    sortKey: 202409,
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
    title: "Data Structures from Scratch",
    description:
      "Implemented BST, B-Tree, Red-Black Tree and more data structures from scratch in C++.",
    period: "Fall 2024 / Data Structure",
    sortKey: 202409,
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
      "Designed a two-part injection mold using SolidWorks (DFM) and manufactured 100+ units.",
    period: "Spring 2023 / Materials and Manufacturing Processes",
    sortKey: 202303,
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
    title: "Smart Eraser",
    description:
      "Fusion 360 mechanical design + electromagnet modules + custom power circuit integration.",
    period: "Spring 2023 / Mechatronics",
    sortKey: 202303,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "analog-noise-meter",
    title: "Analog Noise Level Meter (Op-Amp + Filters)",
    description:
      "Designed purely analog sound measurement system. Migrated breadboard prototype to custom PCB.",
    period: "Spring 2023 / Basic Circuit Theory",
    sortKey: 202303,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "puzzloops",
    title: "PuzzLoops",
    description:
      "2D puzzle game built with custom rendering + collision logic in C++ and OpenGL.",
    period: "Fall 2022 / Programming Methodology",
    sortKey: 202209,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
  {
    id: "legged-robot-ced",
    title: "Olympic Triathlon Robot",
    description:
      "Designed a legged locomotion mechanism and implemented dual-mode control (manual / autonomous) with Arduino + sensors.",
    period: "Fall 2021 / Creative Engineering Design",
    sortKey: 202109,
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
    id: "vess-vacancy-detector",
    title: "Vacancy Detector for Visually Impaired",
    description:
      "A portable Arduino-based assistive device that helps visually impaired commuters identify vacant seats on public transit",
    period: "2021.06 – 2022.01 / VESS",
    sortKey: 202106,
    categoryId: "eng-hardware",
    links: {},
    detail: {
      summary:
        "Starting from the user problem that visually impaired commuters have difficulty identifying vacant seats on public transit, I built a portable vacancy detector prototype using an infrared temperature sensor and vibration feedback.",
      bullets: [
        "Validated the difficulty of identifying vacant subway seats through interviews with the Seoul Association of the Visually Impaired.",
        "Designed the device to detect temperature changes when pointed at a seat and communicate occupancy through vibration.",
        "Completed the prototype, case, and demo video, earning an Encouragement Award at the 13th Creative Design Competition.",
      ],
      media: [],
    },
  },
  {
    id: "vess-medication-assistive-app",
    title: "Medication Assistive Device & App",
    description:
      "Flutter + FastAPI + YOLO-based assistance of medication information for visually impaired users.",
    period: "2022 – 2023 / VESS",
    sortKey: 202312,
    categoryId: "eng-software",
    links: {},
    detail: {
      summary: "Detail page template (dummy).",
      bullets: [],
      media: [],
    },
  },
];

export function getHighlightedProjects() {
  return projects.filter((p) => p.highlight);
}

export function getProjectById(projectId: string) {
  return projects.find((p) => p.id === projectId);
}
