import React, { useState, useEffect } from "react";
import { Navigation, Footer } from "./components";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import FadeIn from "./components/FadeIn";
import "./index.scss";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import SocialImpactPage from "./pages/SocialImpactPage";
import ExperiencePage from "./pages/ExperiencePage";
import CvPage from "./pages/CvPage";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <FadeIn transitionDuration={500} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/impact" element={<SocialImpactPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </FadeIn>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <div
      className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      {/* HashRouter works reliably on GitHub Pages (deep links won't 404). */}
      <HashRouter>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
