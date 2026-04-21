import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HeroLabPage() {
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

      <h1 style={{ marginTop: 8 }}>HERO Lab — Undergraduate Researcher</h1>
      <p style={{ opacity: 0.9, marginTop: 0 }}>2024.12 – 2025.06 • SNU ME</p>

      <h2>Overview</h2>
      <p style={{ opacity: 0.95 }}>
        Write a short narrative here: the research goal, constraints, what you owned, and what you learned.
      </p>

      <h2>Key contributions</h2>
      <ul>
        <li>Placeholder: electrode placement strategy.</li>
        <li>Placeholder: preprocessing pipeline.</li>
        <li>Placeholder: acquisition setup.</li>
      </ul>

      <h2>Media</h2>
      <p style={{ opacity: 0.9 }}>
        Add figures, plots, setup photos, or short demo videos here.
      </p>
    </div>
  );
}

