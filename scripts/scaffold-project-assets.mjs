// project 이미지를 정리하기 편하도록 만든 스크립트

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
const assetsRoot = path.join(repoRoot, "src", "assets", "projects");
const publicRoot = path.join(repoRoot, "public", "projects");

const source = readUtf8(projectsTsPath);
const projectIds = extractProjectIdsFromProjectsTs(source);

if (projectIds.length === 0) {
  console.error(`No project ids found in ${projectsTsPath}`);
  process.exit(1);
}

ensureDir(assetsRoot);
ensureDir(publicRoot);

for (const id of projectIds) {
  const base = path.join(assetsRoot, id);
  ensureDir(base);
  ensureDir(path.join(base, "gallery"));
  ensureDir(path.join(base, "videos"));
  ensureDir(path.join(base, "raw"));

  ensureFile(path.join(base, ".gitkeep"), "");

  ensureFile(
    path.join(base, "thumbnail.placeholder.txt"),
    [
      `Place your thumbnail here as:`,
      `- thumbnail.webp (recommended) OR thumbnail.png OR thumbnail.jpg`,
      ``,
      `Project id: ${id}`,
      ``,
      `Tip: keep thumbnails ~900–1400px wide, under a few hundred KB.`,
      ``,
    ].join("\n"),
  );

  ensureFile(path.join(base, "gallery", ".gitkeep"), "");
  ensureFile(path.join(base, "videos", ".gitkeep"), "");

  // Also scaffold the preferred runtime-served location under public/
  const pub = path.join(publicRoot, id);
  ensureDir(pub);
  ensureFile(path.join(pub, ".gitkeep"), "");
}

console.log(
  `Scaffolded ${projectIds.length} project folders under: ${assetsRoot}`,
);
