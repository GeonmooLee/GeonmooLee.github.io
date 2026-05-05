import React from "react";
import {
  getProjectImageSrc,
  getProjectMediaFallbackSrc,
} from "../utils/projectAssets";

type Props = {
  projectId: string;
  alt: string;
  className?: string;
  width?: string | number;
};

export default function ProjectThumbnail(props: Props) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = getProjectMediaFallbackSrc(props.alt);
  };

  return (
    <img
      src={getProjectImageSrc(props.projectId, 1)}
      className={props.className}
      alt={props.alt}
      width={props.width}
      onError={handleImageError}
    />
  );
}
