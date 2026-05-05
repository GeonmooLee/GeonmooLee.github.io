const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

export function getProjectAssetSrc(projectId: string, fileName: string) {
  const normalizedFileName = fileName.replace(/^\/+/, "");
  return `${publicUrl}/projects/${projectId}/${normalizedFileName}`;
}

export function getProjectImageSrc(projectId: string, imageNumber: number) {
  const fileName = `${String(imageNumber).padStart(2, "0")}.jpg`;
  return getProjectAssetSrc(projectId, fileName);
}

export function getProjectMediaFallbackSrc(label: string) {
  const safeLabel = label.replace(/[<>&]/g, "").slice(0, 52);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <rect width="1200" height="675" fill="#0d1116"/>
      <rect x="1" y="1" width="1198" height="673" rx="24" fill="#141a20" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
      <text x="600" y="318" fill="#ffffff" font-family="Arial, sans-serif" font-size="54" font-weight="700" text-anchor="middle">${safeLabel}</text>
      <text x="600" y="382" fill="rgba(255,255,255,0.68)" font-family="Arial, sans-serif" font-size="26" text-anchor="middle">Add project media to public/projects</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
