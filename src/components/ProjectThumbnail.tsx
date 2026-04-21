import React, { useMemo, useState } from "react";

type Props = {
  projectId: string;
  alt: string;
  className?: string;
  width?: string | number;
  fallbackSrc: string;
};

export default function ProjectThumbnail(props: Props) {
  const base = process.env.PUBLIC_URL || "";

  const candidates = useMemo(() => {
    // Prefer public/ for stable "drop-in" updates without bundler quirks.
    return [
      `${base}/projects/${props.projectId}/thumbnail.webp`,
      `${base}/projects/${props.projectId}/thumbnail.png`,
      `${base}/projects/${props.projectId}/thumbnail.jpg`,
      `${base}/projects/${props.projectId}/thumbnail.jpeg`,
      props.fallbackSrc,
    ];
  }, [base, props.projectId, props.fallbackSrc]);

  const [idx, setIdx] = useState(0);
  const src = candidates[Math.min(idx, candidates.length - 1)];

  return (
    <img
      src={src}
      className={props.className}
      alt={props.alt}
      width={props.width}
      onError={() => setIdx((v) => Math.min(v + 1, candidates.length - 1))}
    />
  );
}

