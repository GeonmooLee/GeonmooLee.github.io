import React from "react";

export default function CvPage() {
  // Option A (recommended): Use Google Drive preview URL for a nice embedded viewer.
  // Example format: https://drive.google.com/file/d/<FILE_ID>/preview
  // Option B: Serve the PDF from /public and embed it directly.
  const pdfUrl = process.env.REACT_APP_CV_PDF_URL;

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
          width: "100%",
          height: "min(80vh, 1200px)",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
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
