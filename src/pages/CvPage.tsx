import React from "react";

function toGoogleDrivePreviewUrl(url?: string) {
  if (!url) {
    return "";
  }

  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (fileMatch) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }

  const openMatch = url.match(/[?&]id=([^&]+)/);
  if (url.includes("drive.google.com") && openMatch) {
    return `https://drive.google.com/file/d/${openMatch[1]}/preview`;
  }

  return url;
}

export default function CvPage() {
  // Option A (recommended): Use Google Drive preview URL for a nice embedded viewer.
  // Example format: https://drive.google.com/file/d/<FILE_ID>/preview
  // Option B: Serve the PDF from /public and embed it directly.
  const pdfUrl = toGoogleDrivePreviewUrl(process.env.REACT_APP_CV_PDF_URL);

  return (
    <div className="items-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <h1 style={{ margin: 0 }}>CV</h1>
      </div>

      <p style={{ opacity: 0.9 }}>
        If the embedded PDF doesn’t show up (browser limitation), use{" "}
        <a href={pdfUrl} target="_blank" rel="noreferrer">
          open in a new tab
        </a>
        .
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "min(80vh, 1200px)",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open CV preview in a new tab"
          title="Open CV preview in a new tab"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 56,
            height: 56,
            zIndex: 1,
          }}
        />
        <iframe
          title="CV PDF Viewer"
          src={pdfUrl}
          style={{ width: "100%", height: "100%", border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
