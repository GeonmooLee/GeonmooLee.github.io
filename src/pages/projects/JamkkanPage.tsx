import React from "react";

import "../../assets/styles/Project.scss";
import {
  ProjectDetailHeader,
  ProjectDetailImageStrip,
  ProjectDetailSection,
} from "../../components/project-detail/ProjectDetailHeader";
import { getProjectById } from "../../data/projects";
import { getProjectAssetSrc } from "../../utils/projectAssets";

const projectId = "jamkkan";

export default function JamkkanPage() {
  const project = getProjectById(projectId);

  return (
    <main className="project-detail-page">
      <ProjectDetailHeader
        title={project?.title || "Jamkkan"}
        period={project?.period || "2026.04.27 - Present"}
        description={
          project?.description ||
          "An Android app that turns unconscious smartphone re-checking into visible behavioral data and gentle self-awareness prompts."
        }
        meta={[
          {
            label: "Organization",
            value: "Personal Android project",
          },
          {
            label: "Role",
            value: "Problem definition, MVP scoping, Android development",
          },
          {
            label: "Focus",
            value: "Digital wellbeing, behavioral data, Android product",
          },
        ]}
      />

      <ProjectDetailImageStrip
        images={[
          {
            src: getProjectAssetSrc(projectId, "01.jpg"),
            alt: "Jamkkan Android app screens showing daily analysis, home, and weekly analysis",
            caption: "<App Overview>",
            imageOptions: {
              objectFit: "contain",
              objectPosition: "center",
            },
          },
        ]}
        imageOptions={{
          maxWidth: "800px",
          height: "520px",
          tabletHeight: "420px",
          mobileHeight: "240px",
          minItemWidth: "320px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      <ProjectDetailSection title="User Problem">
        <ul>
          <li>
            As messaging apps, DMs, email, and social notifications become part
            of everyday life, users often re-check their phones out of anxiety:
            "Did someone reply?", "Did I miss anything?", even when they do not
            have a specific task.
          </li>
          <li>
            This behavior happens in short and frequent bursts rather than as
            one long session, making it hard for users to notice while it keeps
            interrupting the flow of daily life.
          </li>
          <li>
            I wanted to turn repeated checking moments into observable data so
            users can recognize the moment of "I just checked this, why did I
            open it again?"
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Idea & Solution">
        <ul>
          <li>
            Record screen-on events in a local database and visualize
            re-checking intervals, today's screen-on count, shortest interval,
            and daily and weekly patterns.
          </li>
          <li>
            When the phone is turned on again after a short interval, provide a
            gentle notification and empathetic copy so the app raises awareness
            without blaming the user.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="My Role">
        <ul>
          <li>
            <strong className="text-emphasis">
              Carried the project end-to-end as a solo builder
            </strong>
            , from problem definition, MVP scoping, and feature specification to
            Android implementation.
          </li>
          <li>
            Used AI tools to accelerate development while directly defining the
            product direction, user framing, and interaction tone.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection title="Growth & Outcome">
        <ul>
          <li>
            Previous projects often stopped at the idea or prototype stage, but
            <strong className="text-emphasis">
              this time I pushed from problem definition to a working Android
              app and release preparation
            </strong>
            .
          </li>
          <li>
            The project is currently going through Google Play Store
            registration, giving me end-to-end product development experience
            across problem definition, feature design, development, validation,
            and launch.
          </li>
          <li>
            Learned that what matters more than a good idea is{" "}
            <strong className="text-emphasis">
              shaping it into a usable product that real users can try and
              validate
            </strong>
            .
          </li>
        </ul>
      </ProjectDetailSection>
    </main>
  );
}
