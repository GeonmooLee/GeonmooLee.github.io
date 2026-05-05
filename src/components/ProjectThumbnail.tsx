import React from "react";
import { getProjectImageSrc } from "../utils/projectAssets";

type Props = {
  projectId: string;
  alt: string;
  className?: string;
  width?: string | number;
};

export default function ProjectThumbnail(props: Props) {
  return (
    <img
      src={getProjectImageSrc(props.projectId, 1)}
      className={props.className}
      alt={props.alt}
      width={props.width}
    />
  );
}
