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

export type ProjectCategory = "mechanical-control" | "web-software";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category: ProjectCategory;
  highlight?: boolean;
};

// Dummy data for layout (based on the template's sample projects).
// Replace with your real projects later.
export const projects: ProjectItem[] = [
  {
    id: "filmate-ai",
    title: "Filmate AI",
    description:
      "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
    href: "https://www.filmate.club/",
    image: mock10,
    category: "web-software",
    highlight: true,
  },
  {
    id: "high-speed-chase",
    title: "High Speed Chase",
    description:
      "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
    href: "https://yujisatojr.itch.io/highspeedchase",
    image: mock09,
    category: "web-software",
  },
  {
    id: "astro-raiders",
    title: "Astro Raiders",
    description:
      "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
    href: "https://yujisatojr.itch.io/spacecraft",
    image: mock08,
    category: "web-software",
  },
  {
    id: "datum",
    title: "Datum: Integrated Learning Platform",
    description:
      "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
    href: "https://www.datumlearn.com/",
    image: mock07,
    category: "web-software",
    highlight: true,
  },
  {
    id: "wemanage",
    title: "WeManage: Real Estate Asset Management",
    description:
      "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.",
    href: "http://www.wemanage.jp/",
    image: mock06,
    category: "web-software",
  },
  {
    id: "covid-dashboard",
    title: "COVID-19 Case Management",
    description:
      "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4.",
    href: "https://www.byuh.edu/covid-19-case-management",
    image: mock05,
    category: "web-software",
  },
  {
    id: "multi-reg-analysis",
    title: "Multiple Regression Property Analysis",
    description:
      "Analyzed the real estate market and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis in Python.",
    href: "https://github.com/yujisatojr/multi-reg-analysis",
    image: mock04,
    category: "web-software",
  },
  {
    id: "programs-of-study",
    title: "Programs of Study",
    description:
      "Designed and developed a custom component for a CMS-based platform using Java, Handlebars, and LESS.",
    href: "https://holokai.byuh.edu/programs-of-study",
    image: mock03,
    category: "web-software",
  },
  {
    id: "transfer-evaluation-matrix",
    title: "Transfer Evaluation Matrix",
    description:
      "Created an interactive CSV table generator with Java, Handlebars, and LESS to help students identify eligible credits.",
    href: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
    image: mock02,
    category: "web-software",
  },
  {
    id: "submeowrine",
    title: "Submeowrine",
    description:
      "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.",
    href: "https://github.com/yujisatojr/submeowrine",
    image: mock01,
    category: "mechanical-control",
    highlight: true,
  },
];

export function getHighlightedProjects() {
  return projects.filter((p) => p.highlight);
}
