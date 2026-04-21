import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const dummyCvText = `This is a placeholder CV page.

- Put your CV text here (plain text or structured sections).
- You can keep the site's theme while presenting a clean, readable resume.
`;

export default function CvPage() {
  const resumeHref = `${process.env.PUBLIC_URL}/Resume_GeonmooLee_260214.pdf`;

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
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </Button>
      </div>

      <p style={{ opacity: 0.9 }}>
        Note: CRA serves downloadable files reliably from the{" "}
        <code>public/</code> folder. If the PDF is not downloadable yet, place
        your resume PDF in <code>public/</code> with this filename.
      </p>

      <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, marginTop: 24 }}>
        {dummyCvText}
      </pre>
    </div>
  );
}
