import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ProjectMetaItem = {
  label: string;
  value: string;
};

type ProjectHeroImageOptions = {
  maxWidth?: string;
  height?: string;
  tabletHeight?: string;
  mobileHeight?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
};

type ProjectDetailHeaderProps = {
  title: string;
  period: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOptions?: ProjectHeroImageOptions;
  meta?: ProjectMetaItem[];
};

export function ProjectDetailHeader({
  title,
  period,
  description,
  imageSrc,
  imageAlt,
  imageOptions,
  meta = [],
}: ProjectDetailHeaderProps) {
  const imageStyle = {
    "--project-detail-image-max-width": imageOptions?.maxWidth,
    "--project-detail-image-height": imageOptions?.height,
    "--project-detail-image-tablet-height": imageOptions?.tabletHeight,
    "--project-detail-image-mobile-height": imageOptions?.mobileHeight,
    "--project-detail-image-fit": imageOptions?.objectFit,
    "--project-detail-image-position": imageOptions?.objectPosition,
  } as React.CSSProperties;

  return (
    <header className="project-detail-header">
      <div className="project-detail-back-row">
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/projects"
          sx={{ paddingLeft: 0 }}
        >
          Back to Projects
        </Button>
      </div>

      <div className="project-detail-title-block">
        <h1>{title}</h1>
        <p className="project-detail-period">{period}</p>
        <p className="project-detail-description">{description}</p>

        {meta.length > 0 && (
          <div className="project-detail-meta-grid">
            {meta.map((item) => (
              <div className="project-detail-meta-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
      <figure className="project-detail-hero-image" style={imageStyle}>
        <img src={imageSrc} alt={imageAlt} />
      </figure>
    </header>
  );
}

type ProjectDetailSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ProjectDetailSection({
  title,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className="project-detail-section">
      <div className="project-detail-section-heading">
        <h2>{title}</h2>
      </div>
      <div className="project-detail-section-body">{children}</div>
    </section>
  );
}
