const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

export function getProjectAssetSrc(projectId: string, fileName: string) {
  const normalizedFileName = fileName.replace(/^\/+/, "");
  return `${publicUrl}/projects/${projectId}/${normalizedFileName}`;
}

export function getProjectImageSrc(projectId: string, imageNumber: number) {
  const fileName = `${String(imageNumber).padStart(2, "0")}.jpg`;
  return getProjectAssetSrc(projectId, fileName);
}
