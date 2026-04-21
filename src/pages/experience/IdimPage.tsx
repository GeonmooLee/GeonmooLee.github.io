import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function IdimPage() {
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

      <h1 style={{ marginTop: 8 }}>IDIM — Undergraduate Researcher</h1>
      <p style={{ opacity: 0.9, marginTop: 0 }}>2022.07 – 2022.08 • SNU ME</p>

      <h2>Projects</h2>
      <ul>
        <li>Smart electricity-generating door closer (CAD, Arduino).</li>
        <li>Tendon-driven robot using OpenCV + Arduino.</li>
      </ul>

      <h2>Media</h2>
      <p style={{ opacity: 0.9 }}>
        Add photos/videos of the prototype(s), diagrams, or short demos here.
      </p>
    </div>
  );
}

