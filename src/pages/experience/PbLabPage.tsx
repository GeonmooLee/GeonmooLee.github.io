import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PbLabPage() {
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

      <h1 style={{ marginTop: 8 }}>PB Lab — Undergraduate Researcher</h1>
      <p style={{ opacity: 0.9, marginTop: 0 }}>2024.01 – 2024.06 • SNU ME</p>

      <h2>Overview</h2>
      <p style={{ opacity: 0.95 }}>
        Explain the problem and how your segmentation work helped classify activation states.
      </p>

      <h2>What I built</h2>
      <ul>
        <li>Placeholder: deep learning segmentation with Cellpose (Python).</li>
        <li>Placeholder: classical vision pipeline (Matlab).</li>
      </ul>

      <h2>Media</h2>
      <p style={{ opacity: 0.9 }}>
        Add segmentation result images, before/after comparisons, and any demo clips.
      </p>
    </div>
  );
}

