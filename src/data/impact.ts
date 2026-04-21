// Social Impact & Leadership 부분에 들어가는 데이터

export type ImpactItem = {
  id: string;
  period: string;
  sortKey: number; // YYYYMM for "latest first"
  title: string;
  org?: string;
  location?: string;
  bullets: string[];
};

// Seeded from your resume's "Leadership & Social Impact" section.
// This is still safe to edit freely later.
export const impactItems: ImpactItem[] = [
  {
    id: "yksp-honduras",
    period: "2024.10 – 2025.11",
    sortKey: 202511,
    title: "YKSP Honduras Dispatch (KDI & MOEF)",
    org: "8th YKSP Program",
    location: "Honduras",
    bullets: [
      "Participated in establishing a digital registration system for vulnerable populations.",
      "Completed two on-site dispatches; collaborated with SEDESOL officials and coordinated high-level meetings.",
      "Supported logistics and documented official minutes for bilateral discussions.",
    ],
  },
  {
    id: "tokyo-forum-youth-delegate",
    period: "2024.11",
    sortKey: 202411,
    title: "Youth Delegate, 2024 Tokyo Forum",
    org: "Tokyo Forum",
    location: "Tokyo, Japan",
    bullets: [
      "Collaborated with UTokyo students to analyze the low birth rate crisis in Korea & Japan.",
      "Proposed and presented joint policy solutions to global scholars and leaders.",
    ],
  },
  {
    id: "snu-global-volunteer-peru",
    period: "2024.05 – 2024.08",
    sortKey: 202408,
    title: "SNU Global Volunteer Dispatch (Peru)",
    org: "SNUSR",
    location: "Peru",
    bullets: [
      "Led planning for a first-aid training and health education curriculum for elementary students.",
      "Conducted personal boundary & respect education and organized public health campaigns.",
    ],
  },
  {
    id: "forest-of-talent-scholarship-book",
    period: "2024.02 – 2025.02",
    sortKey: 202502,
    title: "Forest of Talent Scholarship (KFAS) – Book Project",
    org: "Korea Foundation for Advanced Studies",
    location: "Korea",
    bullets: [
      "Authored a book titled “Shadow Children: Undocumented Migrant Children”.",
      "Awarded a merit-based stipend (10,000,000 KRW).",
    ],
  },
  {
    id: "k-lab-digital-transformers",
    period: "2021.09 – 2022.12",
    sortKey: 202212,
    title: "K-lab Digital Transformers",
    org: "SNUSR",
    location: "Ulleung High School / Laos collaboration",
    bullets: [
      "Provided ICT education (Python, Raspberry Pi) remotely and in-person to students.",
      "Collaborated with Laos students on appropriate technology in the environment domain.",
    ],
  },
];

export function getImpactItemsLatestFirst() {
  return impactItems.slice().sort((a, b) => b.sortKey - a.sortKey);
}
