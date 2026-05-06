import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { hasReadyProjectDetail, ProjectItem } from "../data/projects";
import ProjectThumbnail from "./ProjectThumbnail";

type Props = {
  project: ProjectItem;
  titleStyle?: React.CSSProperties;
};

export default function ProjectCard({ project, titleStyle }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const hasDetailPage = hasReadyProjectDetail(project.id);
  const detailPath = `/projects/${project.id}`;

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const renderDetailTrigger = (
    children: React.ReactNode,
    className?: string,
  ) => {
    if (hasDetailPage) {
      return <Link to={detailPath}>{children}</Link>;
    }

    return (
      <button className={className} type="button" onClick={openDialog}>
        {children}
      </button>
    );
  };

  return (
    <div className="project">
      {renderDetailTrigger(
        <ProjectThumbnail
          projectId={project.id}
          className="zoom"
          alt={project.title}
          width="100%"
        />,
        "project-detail-trigger project-detail-trigger-media",
      )}
      {renderDetailTrigger(
        <h2 style={titleStyle}>{project.title}</h2>,
        "project-detail-trigger project-detail-trigger-title",
      )}
      <p style={{ opacity: 0.8, marginTop: 0 }}>{project.period}</p>
      <p>{project.description}</p>

      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        aria-labelledby={`project-coming-soon-${project.id}`}
        PaperProps={{ className: "project-coming-soon-dialog" }}
      >
        <DialogTitle id={`project-coming-soon-${project.id}`}>
          Coming soon
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This project detail page is still in progress.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
