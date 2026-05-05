import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getProjectMediaFallbackSrc } from "../../utils/projectAssets";

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
  backTo?: string;
  backLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageOptions?: ProjectHeroImageOptions;
  meta?: ProjectMetaItem[];
};

export function ProjectDetailHeader({
  title,
  period,
  description,
  backTo = "/projects",
  backLabel = "Back to Projects",
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
          to={backTo}
          sx={{ paddingLeft: 0 }}
        >
          {backLabel}
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
      {imageSrc && (
        <figure className="project-detail-hero-image" style={imageStyle}>
          <img src={imageSrc} alt={imageAlt || title} />
        </figure>
      )}
    </header>
  );
}

type ProjectDetailImage = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
  poster?: string;
  imageOptions?: ProjectImageStripOptions;
};

type ProjectImageStripOptions = {
  maxWidth?: string;
  height?: string;
  tabletHeight?: string;
  mobileHeight?: string;
  minItemWidth?: string;
  objectFit?: React.CSSProperties["objectFit"];
  objectPosition?: React.CSSProperties["objectPosition"];
};

type ProjectDetailImageStripProps = {
  images: ProjectDetailImage[];
  imageOptions?: ProjectImageStripOptions;
};

function getProjectMediaType(image: ProjectDetailImage) {
  if (image.type) return image.type;

  return /\.(mp4|webm|mov|m4v)$/i.test(image.src) ? "video" : "image";
}

function handleProjectImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = getProjectMediaFallbackSrc(
    event.currentTarget.alt || "Project media",
  );
}

export function ProjectDetailImageStrip({
  images,
  imageOptions,
}: ProjectDetailImageStripProps) {
  const [activeMedia, setActiveMedia] = useState<ProjectDetailImage | null>(
    null,
  );

  useEffect(() => {
    if (!activeMedia) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMedia(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMedia]);

  const getImageStripStyle = (options?: ProjectImageStripOptions) =>
    ({
      "--project-detail-strip-max-width": options?.maxWidth,
      "--project-detail-strip-height": options?.height,
      "--project-detail-strip-tablet-height": options?.tabletHeight,
      "--project-detail-strip-mobile-height": options?.mobileHeight,
      "--project-detail-strip-min-width": options?.minItemWidth,
      "--project-detail-strip-fit": options?.objectFit,
      "--project-detail-strip-position": options?.objectPosition,
    }) as React.CSSProperties;

  const imageStripStyle = {
    ...getImageStripStyle(imageOptions),
    gridTemplateColumns: `repeat(${Math.max(images.length, 1)}, minmax(0, 1fr))`,
  } as React.CSSProperties;

  return (
    <>
      <div
        className="project-detail-image-strip"
        style={imageStripStyle}
      >
        {images.map((image) => {
          const mediaType = getProjectMediaType(image);

          return (
            <figure
              className="project-detail-image-strip-item"
              key={image.src}
              style={getImageStripStyle(image.imageOptions)}
            >
              <button
                className="project-detail-image-strip-button"
                type="button"
                onClick={() => setActiveMedia(image)}
                aria-label={`Open larger view: ${image.alt}`}
              >
                {mediaType === "video" ? (
                  <video
                    src={image.src}
                    poster={image.poster}
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={image.alt}
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    onError={handleProjectImageError}
                  />
                )}
              </button>
              {image.caption && (
                <figcaption className="project-detail-image-caption">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {activeMedia && (
        <div
          className="project-detail-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeMedia.alt}
          onClick={() => setActiveMedia(null)}
        >
          <button
            className="project-detail-image-modal-close"
            type="button"
            onClick={() => setActiveMedia(null)}
            aria-label="Close media preview"
          >
            x
          </button>
          <div
            className="project-detail-image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            {getProjectMediaType(activeMedia) === "video" ? (
              <video
                src={activeMedia.src}
                poster={activeMedia.poster}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={activeMedia.src}
                alt={activeMedia.alt}
                onError={handleProjectImageError}
              />
            )}
          </div>
        </div>
      )}
    </>
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
