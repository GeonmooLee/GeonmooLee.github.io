// Social Impact & Leadership 부분에 들어가는 데이터

export type ImpactItem = {
  id: string;
  period: string;
  title: string;
  org?: string;
  location?: string;
  bullets: string[];
};

// Dummy data for layout. Replace with your real impact/leadership items later.
export const impactItems: ImpactItem[] = [
  {
    id: "yksp-honduras",
    period: "2024.10 – 2025.11",
    title: "Knowledge Sharing Program (Honduras) – Internship",
    org: "KDI & MOEF (Dummy)",
    location: "Tegucigalpa, Honduras (Dummy)",
    bullets: [
      "Supported a digital registration system project for vulnerable populations.",
      "Coordinated meetings, logistics, and documentation for stakeholders.",
    ],
  },
  {
    id: "shadow-children-book",
    period: "2024",
    title: "Social Impact Project – Authored a book",
    org: "Scholarship Program (Dummy)",
    location: "Seoul, KR (Dummy)",
    bullets: [
      "Wrote a book as part of a social impact initiative.",
      "Focused on real-world issues and public communication.",
    ],
  },
  {
    id: "global-volunteer",
    period: "2024.05 – 2024.08",
    title: "Global Volunteer – Health Education",
    org: "University Program (Dummy)",
    location: "Peru (Dummy)",
    bullets: [
      "Designed and delivered first-aid and health education curriculum.",
      "Organized community-facing public health campaigns.",
    ],
  },
];
