// Scaffold project media folders under public/projects.

import fs from "node:fs";
import path from "node:path";

function readUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function ensureFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, "utf8");
  }
}

function extractProjectIdsFromProjectsTs(source) {
  // Limit to the "projects" array region to avoid picking up category ids.
  const startIdx = source.indexOf("export const projects");
  if (startIdx === -1) return [];
  const slice = source.slice(startIdx);

  const endIdx = slice.indexOf("];");
  const region = endIdx === -1 ? slice : slice.slice(0, endIdx);

  const ids = [];
  const re = /\bid:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(region)) !== null) {
    ids.push(match[1]);
  }
  return Array.from(new Set(ids));
}

const repoRoot = process.cwd();
const projectsTsPath = path.join(repoRoot, "src", "data", "projects.ts");
const publicRoot = path.join(repoRoot, "public", "projects");

const source = readUtf8(projectsTsPath);
const projectIds = extractProjectIdsFromProjectsTs(source);

if (projectIds.length === 0) {
  console.error(`No project ids found in ${projectsTsPath}`);
  process.exit(1);
}

ensureDir(publicRoot);

for (const id of projectIds) {
  const pub = path.join(publicRoot, id);
  ensureDir(pub);
  ensureFile(path.join(pub, ".gitkeep"), "");
  if (!fs.existsSync(path.join(pub, "01.jpg"))) {
    ensureFile(
      path.join(pub, "01.placeholder.txt"),
      [
        `Add the required thumbnail/detail image as:`,
        `- 01.jpg`,
        ``,
        `Additional detail images should continue as:`,
        `- 02.jpg`,
        `- 03.jpg`,
        ``,
        `Project id: ${id}`,
        ``,
        `Use zero-padded JPEG filenames so cards and detail pages share the same media folder.`,
        ``,
      ].join("\n"),
    );
  }
}

console.log(
  `Scaffolded ${projectIds.length} project folders under: ${publicRoot}`,
);
