import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MandRoInternshipPage() {
  return (
    <div className="items-container">
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/experience"
        sx={{ paddingLeft: 0 }}
      >
        Back to Experience
      </Button>

      <h1 style={{ marginTop: 8 }}>Mand.ro — Research Internship</h1>
      <p style={{ opacity: 0.9, marginTop: 0 }}>2025.07 – 2025.08 • Prosthetic startup</p>

      <h2>What I did</h2>
      <ul>
        <li>Bullet point placeholder (replace with your final wording).</li>
        <li>Bullet point placeholder (replace with your final wording).</li>
        <li>Bullet point placeholder (replace with your final wording).</li>
      </ul>

      <h2>Photos</h2>
      <p style={{ opacity: 0.9 }}>
        Add images here (e.g. PCB, prototype, test setup). You can use <code>&lt;img /&gt;</code> or a small gallery
        component later.
      </p>

      <h2>Videos</h2>
      <p style={{ opacity: 0.9 }}>
        Add demo videos here (YouTube embed or mp4). Template example:
      </p>
      <div
        style={{
          width: "100%",
          height: "min(60vh, 520px)",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <iframe
          title="Mand.ro video (placeholder)"
          src="about:blank"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </div>
  );
}

