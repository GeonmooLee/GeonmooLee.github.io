// Projects 부분에 들어가는 데이터

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
  { id: "mechanical-control", label: "Mechanical / Control" },
  { id: "web-software", label: "Web / Software" },
];

// Dummy data for layout (based on the template's sample projects).
// Replace with your real projects later.
export const projects: ProjectItem[] = [
  {
    id: "filmate-ai",
    title: "Filmate AI",
    description:
      "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
    image: mock10,
    categoryId: "web-software",
    highlight: true,
    links: { demo: "https://www.filmate.club/" },
    detail: {
      summary:
        "Detail page template (dummy). Replace this with a longer story: problem → approach → outcomes.",
      bullets: ["What you built", "Key technical decisions", "Impact / results"],
      media: [],
    },
  },
  {
    id: "high-speed-chase",
    title: "High Speed Chase",
    description:
      "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
    image: mock09,
    categoryId: "web-software",
    links: { demo: "https://yujisatojr.itch.io/highspeedchase" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "astro-raiders",
    title: "Astro Raiders",
    description:
      "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
    image: mock08,
    categoryId: "web-software",
    links: { demo: "https://yujisatojr.itch.io/spacecraft" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "datum",
    title: "Datum: Integrated Learning Platform",
    description:
      "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
    image: mock07,
    categoryId: "web-software",
    highlight: true,
    links: { demo: "https://www.datumlearn.com/" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "wemanage",
    title: "WeManage: Real Estate Asset Management",
    description:
      "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.",
    image: mock06,
    categoryId: "web-software",
    links: { demo: "http://www.wemanage.jp/" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "covid-dashboard",
    title: "COVID-19 Case Management",
    description:
      "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4.",
    image: mock05,
    categoryId: "web-software",
    links: { demo: "https://www.byuh.edu/covid-19-case-management" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "multi-reg-analysis",
    title: "Multiple Regression Property Analysis",
    description:
      "Analyzed the real estate market and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis in Python.",
    image: mock04,
    categoryId: "web-software",
    links: { github: "https://github.com/yujisatojr/multi-reg-analysis" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "programs-of-study",
    title: "Programs of Study",
    description:
      "Designed and developed a custom component for a CMS-based platform using Java, Handlebars, and LESS.",
    image: mock03,
    categoryId: "web-software",
    links: { demo: "https://holokai.byuh.edu/programs-of-study" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "transfer-evaluation-matrix",
    title: "Transfer Evaluation Matrix",
    description:
      "Created an interactive CSV table generator with Java, Handlebars, and LESS to help students identify eligible credits.",
    image: mock02,
    categoryId: "web-software",
    links: { demo: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
  {
    id: "submeowrine",
    title: "Submeowrine",
    description:
      "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.",
    image: mock01,
    categoryId: "mechanical-control",
    highlight: true,
    links: { github: "https://github.com/yujisatojr/submeowrine" },
    detail: { summary: "Detail page template (dummy).", bullets: [], media: [] },
  },
];

export function getHighlightedProjects() {
  return projects.filter((p) => p.highlight);
}

export function getProjectById(projectId: string) {
  return projects.find((p) => p.id === projectId);
}
